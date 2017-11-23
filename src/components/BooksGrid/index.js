import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'


const BooksGrid = ( {books, onUpdateBook, prev} ) => {

    return (
       <ol className="books-grid">
            {
                books.map(book => (
                    <li key={book.id}>
                       <Book book={book} onUpdateBook={onUpdateBook} prev={prev} />
                    </li>
                ))
            }
       </ol>
    )

}

BooksGrid.propTypes = {

    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired

}

export default BooksGrid