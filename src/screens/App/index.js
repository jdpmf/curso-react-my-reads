import React from 'react'
import {Route} from 'react-router-dom'
import ListBooks from '../ListBooks'
import SearchBook from '../SearchBooks'
import * as BooksAPI from '../../utils/BooksAPI'
import './index.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  updateBook = (book,shelf) => {
    BooksAPI.update(book, shelf).then(() => {
       this.setState({
         books: this.state.books.map(b => {
           if(b.id === book.id) {
             b.shelf = shelf
           }
           return b
         })
       })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} onUpdateBook={this.updateBook} />
        )}/>

        <Route path="/search" render={() => (
          <SearchBook books={this.state.books} onUpdateBook={this.updateBook} />
        )}/>

      </div>
    )
  }
}

export default BooksApp
