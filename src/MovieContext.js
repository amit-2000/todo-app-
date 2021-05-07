import React, { useState, createContext } from 'react';

export const MovieContext = createContext();
export const MovieProvider = (props) => {

    const [movies, setMovie] = useState([
        {
            name: 'Add a note 📝',
            price: "🕰️",
            id: 24356
        }
    ]);
    return (


        <MovieContext.Provider value={[movies, setMovie]}>
            {/* <movieList /> */}
            {props.children}
        </MovieContext.Provider>
    )
}


