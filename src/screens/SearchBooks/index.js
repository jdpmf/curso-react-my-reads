import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BooksGrid from '../../components/BooksGrid'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'
import * as BooksAPI from '../../utils/BooksAPI'

export class SearchBooks extends Component {

    static propTypes = {

        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired

    }

    state = {
        query: '',
        showingBooks: [],
        message: ''
    }

    updateQuery = (query) => {

        this.setState({
            query: query
        })

        this.searchBooks(query)

    }

    searchBooks = (query) => {

        if(query){

            BooksAPI.search(query, 20).then(
                (books) => {

                    let showingBooks = []
                    let message = ''

                    if(books.length > 0) {
                        showingBooks = this.updateBookShelf(books)
                        message = ''
                    }else {
                        showingBooks = []
                        message = 'Não foi encontrado nenhum livro'
                    }

                    this.setState({
                        showingBooks: showingBooks,
                        message: message
                    })
                }
            )

        }
        else
            this.setState({showingBooks: [], message: ''})

    }

    updateBookShelf = (booksWithoutShelf) => {

        return booksWithoutShelf.map(b => {

            const book = { ...b, ...{shelf: 'none'} }

            const booksProps = this.props.books.filter((_) => _.id === book.id)

            if(booksProps.length > 0) {

                book.shelf = booksProps[0].shelf

            }

            return book

        })

    }

    updateShowingBook = (book, shelf) => {
        this.setState({
            showingBooks: this.state.showingBooks.map(b => {
              if(b.id === book.id) {
                b.shelf = shelf
              }
              return b
            })
        })
    }


    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <Debounce time="400" handler="onChange">
                            <input type="text" onChange={(event) => this.updateQuery(event.target.value.trim())} placeholder="Search by title or author"/>
                        </Debounce>


                    </div>
                </div>
                <div className="search-books-results">
                    <span>{this.state.message}</span>
                    <BooksGrid books={this.state.showingBooks} onUpdateBook={this.props.onUpdateBook} onUpdateShowingBook={this.updateShowingBook} prev="search" />
                </div>
            </div>
        )
    }
}

export default SearchBooks