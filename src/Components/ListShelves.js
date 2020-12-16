import React from 'react';
import BookShelf from './BookShelf';

class ListShelves extends React.Component {
    render() {
        return (
            <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  {this.props.bookshelves.map( (bookshelf, index) => { 
                    console.log(bookshelf)
                    return (
                    <BookShelf
                      key = {index}
                      bookshelfTitle = {bookshelf.currentlyReading.name}
                      bookshelfBooks = {bookshelf.currentlyReading.booksInShelf}
                    />
                  )})}
                </div>
              </div>
  
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
                
            </div>
        
        )
    }
}
export default ListShelves;