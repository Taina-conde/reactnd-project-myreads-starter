import React from 'react';
import BookShelf from './BookShelf';

class ListShelves extends React.Component {
  
    render() {
      const {booksInShelves, bookshelves} = this.props;
        return (
            <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  {bookshelves.map( (bookshelf, index) =>{
                    const booksInShelf = booksInShelves.filter((book)=> (
                      book.shelf === bookshelf.id && book
                    ))
                    
                    return (
                      <BookShelf
                        key = {index}
                        bookshelfTitle = {bookshelf.name}
                        bookshelfBooks = {booksInShelf}
                        onUpdateBookshelf = {this.props.onUpdateBookshelf}
                      />
                    )
                    })}
                </div>
              </div>
  
        
                
            </div>
        
        )
    }
}
export default ListShelves;