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

                          />
                      ))}
                    </ol>
                  </div>
                </div>
        </div>
    )
}
export default BookShelf;