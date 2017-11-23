import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Book = ({book, onUpdateBook, prev}) => {

    const path = `/details/${prev}/${book.id}`

    return (
        <div className="book">
            <div className="book-top">
            <Link to={path}>
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}></div> </Link>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
    )
}

Book.propTypes = {

    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    prev: PropTypes.string.isRequired

}

export default Book;