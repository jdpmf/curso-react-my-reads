import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book'


const BooksGrid = ( {books, onUpdateBook} ) => {

    return (
       <ol className="books-grid">
            {
                books.map(book => (
                    <li key={book.id}>
                       <Book book={book} onUpdateBook={onUpdateBook} />
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