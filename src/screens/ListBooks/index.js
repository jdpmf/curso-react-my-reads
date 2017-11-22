import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from '../../components/Bookshelf'

const ListBooks = ({books, onUpdateBook}) => {

    const shelfs = [
        {
            name: 'Currently Reading',
            value: 'currentlyReading'
        }, {
            name: 'Want to Read',
            value: 'wantToRead'
        }, {
            name: 'Read',
            value: 'read'
        }
    ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <Bookshelf shelfs={shelfs} books={books} onUpdateBook={onUpdateBook}/>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

ListBooks.propTypes = {

    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired

}

export default ListBooks