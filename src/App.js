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
        id : "currentlyReading", 
        name: 'Currently Reading',     
      },
     {  
        id: "wantToRead",
        name: "Want to Read",     
     },
     {
        id: "read",
        name: "Read",
     }
    ]
  
    
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

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        BooksAPI.getAll()
          .then((booksInShelves) => {
            this.setState(() => ({
            booksInShelves
        }))
      })
        
        

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
                booksInShelves = {this.state.booksInShelves}
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
