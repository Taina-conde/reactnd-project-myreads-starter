import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class Search extends React.Component {
    state = {
        query: ""
    }
    
    handleChange = query => {
        this.setState(() => ({
            query: query
        }), () => {
            this.state.query ? 
                this.props.onSearchBooks(this.state.query) : 
                this.props.onEmptyBooksSearch();
        })
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.state.query && this.props.onSearchBooks(this.state.query);
        this.setState({
            query: ""
        });
    }
 
    onHandleClick = e => {
        this.props.onHandleClick(e);
    }
    render() {
        const { booksInShelves, books } = this.props;
        const { query } = this.state;
        const booksInShelvesIds = booksInShelves.map( book => ([book.id, book.shelf]));
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to = "/" onClick = {this.onHandleClick}>
                            <button 
                                className="close-search"
                                
                            >Close</button>
                        </Link>

                        <form onSubmit = {this.handleSubmit}>
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

                    
                            {books.length > 0 && books.map( book => {
                                let shelf = "none";
                                booksInShelvesIds.forEach(bookInShelf => {
                                    if (book.id !== bookInShelf[0]) {
                                        return  
                                    }
                                    shelf = bookInShelf[1]
                                    })
                                return  (
                                    <Book
                                    key= {book.id}
                                    bookId = {book.id}
                                    book = {book}
                                    shelf = {shelf}
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