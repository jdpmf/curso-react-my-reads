import React from 'react'
import BooksGrid from '../BooksGrid'
import PropTypes from 'prop-types'

const Bookshelf = ({shelfs, books, onUpdateBook}) => {

    return (

        <div>
        {

            shelfs.map(shelf => (
                <div key={shelf.value} className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <div className="bookshelf-books">
                        <BooksGrid books={books.filter(_ => _.shelf === shelf.value)} onUpdateBook={onUpdateBook} />
                    </div>
                </div>
            ))

        }
        </div>

    )

}

Bookshelf.propTypes = {

    shelfs: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired

}

export default Bookshelf;