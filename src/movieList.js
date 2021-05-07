import React, { useState , useContext } from 'react';
import {MovieContext} from './MovieContext'
import Movie from './movie';

 const MovieList = () => {
    
    const [movies , setMovie] = useContext(MovieContext)


    return (
        <div>
            {movies.map(movie => (
                // <h1>{movie.name}</h1>
                
                // <p>{movie.price}</p>
     
              <Movie name ={movie.name} price ={movie.price} id ={movie.id} />
            ))}
        </div> 

    );
}
export default MovieList;