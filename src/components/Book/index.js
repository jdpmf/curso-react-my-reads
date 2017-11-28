import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Book = ({book, onUpdateBook, prev, onUpdateShowingBook}) => {

    const path =  `/details/${prev}/${book.id}`


    return (
        <div className="book">
            <div className="book-top">
            <Link to={path}>
                <div
                    className="book-cover"
                    style={{
                    width: 128,
                    height: 193,
                    backgroundRepeat: "space",
                    backgroundImage: `url(${(book.imageLinks && book.imageLinks.smallThumbnail) ? book.imageLinks.smallThumbnail  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAADBCAMAAAAw5EgwAAAAMFBMVEX///+hoaH5+fnQ0NDW1ta2traoqKju7u69vb3i4uLDw8Ovr6/c3Nz09PTKysro6OiAXINvAAAB4ElEQVR4nO3X3W6kMAyG4ZhJwk+Auf+73dgObLdqpVaCsAfvc9DSAdUfSSaYEAAAOGXJmx285PVE/VFE0rMBcpb50QASfQieCzAUiX8DDK86KblfFg2wSjkDbEVM6hkgJK3tAZKkMYQ1d5sPCzBLHjzAW4+qaIPSLUBYZPcAUSb7eLCP+wWoP8cWoA19lrFngLDL8ugIhCHL9OQa0Ipio19kqmMfs20NPQPUyhbg7duALJ3qh02yH8ziNz0uug31un+g545DgP87wCz7NonuwqP+skiz7kjTalfF1idpA7+m2rJdt1EdAVIW6wXPfmxte7J2zLEdawC/oj00LwwgeQ1zDVFGLf2uRW07nrRSfVSuergHvbLUSGO67GF1BMjaf+xSBqt6/vdZR2O2+/WnxuIvEetlQ3BOgf4R/SG4e398TsfHAOWYjava5q8CtPb0LLSJT4HGyEeAO0fAAiSZtuPE5DXf4YZe8dsAXulYA8m+o+Gf9XFzgGI9atYT8UPR6H1LTOvdAfy7bwEGnwJvk5a2Bu4NYDdZ19sy6oljPfrZmPToqvo/4m/PukE99NhoPfqr27vCZ7tcPO+/Fm0V7p3eFgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AF1oCiEyGXVhAAAAAElFTkSuQmCC"})`
                }}></div></Link>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => {
                        if(onUpdateShowingBook)
                            onUpdateShowingBook(book, event.target.value)
                        onUpdateBook(book, event.target.value)
                        }}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
    )
}

Book.propTypes = {

    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    prev: PropTypes.string.isRequired

}

export default Book;