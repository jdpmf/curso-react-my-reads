import React from 'react'
import {Link} from 'react-router-dom'
import Column from '../../components/Column'
import './index.css'

const DetailsBook = ({books, match}) => {

    const book = books.filter(b => (b.id === match.params.id))[0]
    const prev = match.params.prev
    const path = `/${prev === "list" ?  "" : prev}`

    return (
        <div>
            <div className="list-books-title">
            <Link to={path} className="close-details">Close</Link>
                <h1>{book ? book.title : "Esse livro não possui detalhes"}</h1>
            </div>
            <h3 className="subtitle">{book ? book.subtitle: ""}</h3>

            {book ? (
                <div>
                    <div
                            className="photo"
                            style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>
                    <div className="items">
                        <Column title="Authors" value={book.authors ? book.authors.join(', ') : ""} />
                        <Column title="Publisher" value={book.publisher} />
                        <Column title="Publisher Date" value={book.publishedDate} />
                        <Column title="Page Count" value={book.pageCount} />
                        <Column title="Categories" value={book.categories ? book.categories.join(', ') : ""} />
                    </div>
                    <div className="description">
                    <Column title="Description" value={book.description} />
                    </div>
                </div>
            ) : (<div></div>) }
        </div>
    )
}

export default DetailsBook