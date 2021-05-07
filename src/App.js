import React from 'react';
import './App.css';
import MovieList from './movieList'
import {MovieProvider} from './MovieContext'
import Nav from './nav';
import AddMovie from './addMovie'

function App() {
  return (
   <MovieProvider>
    <div className="App" tabIndex>

        <h1>Lots of work to doo 😴</h1>
        <br></br>
     
       
      <MovieList/>
        <AddMovie/>
        <Nav/>

    </div>
   </MovieProvider>

  );
}

export default App;
