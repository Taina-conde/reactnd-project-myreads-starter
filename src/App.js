import React from 'react';
// import * as BooksAPI from './BooksAPI';
import { Route } from "react-router-dom";
import './App.css';
import Search from './Components/Search';
import ListBooks from './Components/ListBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    
  }

  render() {
    return (
      <div className="app">
        <Route
          path = "/"
          render = {() => (
            <ListBooks
            />
          ) }
        />
        <Route
          exact path = '/search'
          render = {()=> (
            <Search/>
          )}
        />
       
      </div>
    )
  }
}

export default BooksApp
