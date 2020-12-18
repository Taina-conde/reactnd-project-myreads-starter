import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Search extends React.Component {
    state = {
        query: ""
    }
    
    handleChange = query => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    handleSubmit = event => {
        event.preventDefault();
        this.state.query && this.props.onSearchBooks(this.state.query)
        this.setState({
            query: ""
        })
    }
    onHandleClick = e => {
        this.props.onHandleClick(e);
    }
    render() {
        const { booksInShelves, books } = this.props;
        const { query } = this.state;
        const booksInShelvesIds = booksInShelves.map( book => {
            const id = book.id;
            const shelf = book.shelf;
            const bookObj = {
                id: id,
                shelf: shelf
            };
            return bookObj
        });
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to = "/" onClick = {this.onHandleClick}>
                            <button 
                                className="close-search"
                                
                            >Close</button>
                        </Link>

                        <form onSubmit= {this.handleSubmit}>
                            <div className="search-books-input-wrapper">
                                <input 
                                    type="text" 
                                    placeholder="Search by title or author"
                                    value = {query}
                                    onChange = {(event)=> this.handleChange(event.target.value)} 
                                    />

                            </div>
                        </form>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">

                            {console.log(booksInShelvesIds)}
                            {books.length > 0 && books.map( book => {
                                booksInShelvesIds.forEach(bookInShelf => {
                                    if (book.id === bookInShelf.id) {
                                        const shelf = bookInShelf.shelf;
                                        book.shelf = shelf;
                                    } else {
                                        book.shelf = "none";
                                    }
                                })
                                return  (
                                    <Book
                                    key= {book.id}
                                    bookId = {book.id}
                                    book = {book}
                                    shelf = {book.shelf}
                                    bookAuthors = {book.authors}
                                    bookTitle = {book.title}
                                    bookCover = {book.imageLinks.smallThumbnail}
                                    onUpdateBookshelf = {this.props.onUpdateBookshelf}
                                    />
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;