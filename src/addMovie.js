import React, { useState, createContext, useContext } from 'react';
import { MovieContext } from './MovieContext'

export const AddMovie = () =>{
    const [movie , setMovie] = useContext(MovieContext);
    const [name , setname] = useState('');
    const [price , setPrice] = useState('');
    
    const Updatename = (e)=>{
        setname(e.target.value)
    }    
    const UpdatePrice = (e)=>{
        setPrice(e.target.value)
    }   

    const addMovie = e=>{
        e.preventDefault();
        setMovie(prevMovie =>[...prevMovie, {name :name , price :price}])
    };

    return(
        <div>
        <form onSubmit={addMovie} >
                <input type="text" name="name" value={name} onChange={Updatename} placeholder="📝📒📔 Task to do" style={{
                    margin: " 0  1rem  0.5rem  1rem",
                    padding :"0.3rem",
                   
                }} ></input>
                <input type="text" name="price" value={price} onChange={UpdatePrice} placeholder=" ⏰ I Will Complete Before" style={{
                    margin: " 0 1rem 0.5rem 1rem",
                    padding: "0.3rem",
                }}></input>
        <button style={{
                margin: " 0 1rem 0.5rem 1rem",
                padding: "0.3rem",
            backgroundColor :'white',
            border: "1px solid black",
            borderRadius:"5px",
            cursor:'pointer'
        }}> Click  To Add In List</button>
        </form>
        </div>
     
    )
}
export default AddMovie;