import React from 'react';
import Book from './Book';

function BookShelf (props) {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {props.bookshelfBooks && props.bookshelfBooks.map( book => (
                          <Book
                            key= {book.id}
                            bookId = {book.id}
                            book = {book}
                            shelf = {book.shelf}
                            bookAuthors = {book.authors}
                            bookTitle = {book.title}
                            bookCover = {book.imageLinks.smallThumbnail}
                            onUpdateBookshelf = {props.onUpdateBookshelf}
                          />
                      ))}
                    </ol>
                  </div>
                </div>
        </div>
    )
}
export default BookShelf;