import React, { Component } from 'react';

class Book extends Component {
    render() {
        const { bookAuthors, bookTitle, bookCover } = this.props;
        const authors = bookAuthors.length > 1 ? bookAuthors.join(", ") : bookAuthors; 
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                        <div className="book-title">{bookTitle}</div>
                        <div className="book-authors">{authors}</div>
                    </div>     
                </li>
            </div>
        )
    }
}
export default Book;