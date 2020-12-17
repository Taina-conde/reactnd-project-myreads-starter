import React, { Component } from 'react';


class Book extends Component {
    state = {
        value: this.props.shelf
    }
    
    handleSelect = value => {
        this.setState({
            value: value
        }, function () {
            const book = this.props.book;
            
            const shelf = this.state.value;
            
            this.props.onUpdateBookshelf(book, shelf)
        })
        
    }
    
    render() {
        const { book } = this.props;
        const authors = book.authors ? book.authors : null;
         
        return (
            <div>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select 
                                value = {this.state.value} 
                                onChange = {(event) => this.handleSelect(event.target.value)}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{authors? authors.join(", ") : authors}</div>
                    </div>     
                </li>
            </div>
        )
    }
}
export default Book;