import React, { useState, createContext } from 'react';


import {MovieProvider} from './MovieContext'
const Movie =({name , price , id}) => {
    return (
        <div>
            <h3> {"My task : "+ name}</h3>
            <p> Time : {price}</p>
            {/* <p>{ "and is "+id}</p> */}
        </div>
    )
}

export default Movie;