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
                        
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value = {query}
                                onChange = {(event)=> this.handleChange(event.target.value)} 
                                />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {}
                            {query && books.filter( book => {
                                const title = book.title.toLowerCase();
                                const authorsString = book.authors.length > 1 ? book.authors.join(", ").toLowerCase() : book.authors[0].toLowerCase();
                                return title.includes(query.toLowerCase()) || authorsString.includes(query.toLowerCase());
                            }).map( book => (
                                    <Book
                                        key = {book.id}
                                        bookId ={book.id}
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