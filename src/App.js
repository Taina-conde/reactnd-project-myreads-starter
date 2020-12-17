import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import './App.css';
import Search from './Components/Search';
import ListShelves from './Components/ListShelves';
import OpenSearchButton from './Components/OpenSearchButton';

class BooksApp extends React.Component {
  state = {
    booksInShelves: [],
    booksSearch : [],
    bookshelves : [
      { 
         
        name: 'Currently Reading',
        currentlyReading: [],
      },
     {  
        
        name: "Want to Read",
        wantToRead: [],
     },
     {
        name: "Read",
        read: []
     }
    ]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((booksInShelves) => {
        this.setState(() => ({
          booksInShelves
        }))
      })

  }

  searchBooks = (query) => {
    BooksAPI.search(query)
      .then((booksSearch) => {
        this.setState(()=>({
          booksSearch
        }))
      })
  }

  updateBookshelf = (bookId, shelf) => {
    BooksAPI.update(bookId, shelf)
      .then((bookshelves) => {
        const currentlyReading = bookshelves.currentlyReading;
        const wantToRead = bookshelves.wantToRead;
        const read = bookshelves.read;
        console.log(bookshelves);
        this.setState(()=> ({
          bookshelves: {
            
          }
        }))
        

      })
      
  }


  render() {
    return (
      <div className="app">
        <Route
          exact path = "/"
          render = {() => (
            <div>
              <ListShelves
                bookshelves = {this.state.bookshelves}
                books = {this.state.booksInShelves}
                onUpdateBookshelf = {this.updateBookshelf}

              />
              <OpenSearchButton/>
            </div>
          ) }
        />
        <Route
          path = '/search'
          render = {()=> (
            <Search
              bookshelves = {this.state.bookshelves}
              books = {this.state.booksSearch}
              onSearchBooks = {this.searchBooks}
              onUpdateBookshelf = {this.updateBookshelf}
            />
          )}
        />
       
      </div>
    )
  }
}

export default BooksApp;
