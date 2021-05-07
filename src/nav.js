import React, {useContext } from 'react';

import {MovieContext} from './MovieContext';


const Nav = () => {

    const [movies , setMovies] = useContext(MovieContext);

    return (
        <div>
            <h3>
                Total tasks to do {movies.length -1}
            </h3>
        </div>
    );
}

export default Nav