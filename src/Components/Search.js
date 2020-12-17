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
    }
    render() {
        const { bookshelves, books, onSearchBooks } = this.props;
        const { query } = this.state;
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to = "/">
                            <button className="close-search">Close</button>
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
                            {}
                            {query && books.map( book => (
                                    <Book
                                        key = {book.id}
                                        bookId ={book.id}
                                        book = {book}
                                        bookAuthors = {book.authors}
                                        bookTitle = {book.title}
                                        bookCover = {book.imageLinks.smallThumbnail}
                                        onUpdateBookshelf = {this.props.onUpdateBookshelf}
                                    />
                                )
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;