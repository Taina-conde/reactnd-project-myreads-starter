import React from 'react';

class ListShelves extends React.Component {
    render() {
        return (
            <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  {this.props.map(bookshelf => (
                    <BookShelf
                      bookshelfTitle = {bookshelf.name}
                      bookshelfBooks = {bookshelf.books}
                    />
                  ))}
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