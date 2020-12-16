import React, { Component } from 'react';

class Book extends Component {
    render() {
        const { bookAuthor, bookTitle, bookCover } = this.props;
        console.log(bookCover)
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookCover }}></div>
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
                        <div className="book-authors">{bookAuthor}</div>
                    </div>     
                </li>
            </div>
        )
    }
}
export default Book;