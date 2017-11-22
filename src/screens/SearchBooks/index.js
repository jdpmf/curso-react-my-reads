import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BooksGrid from '../../components/BooksGrid'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

export class SearchBooks extends Component {

    static propTypes = {

        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired

    }

    state = {
        query: ''
    }

    updateQuery = (query) => {

        this.setState({
            query: query.trim()
        })

    }

    render() {

        let showingBooks
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => (match.test(book.title) || match.test(book.authors) ))
        }else {
            showingBooks = this.props.books
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                        <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={showingBooks} onUpdateBook={this.props.onUpdateBook}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks