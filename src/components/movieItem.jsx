import React, { useState } from 'react';

const MovieItem = (props) => {
    const { movie, nominate, cart } = props
    const [button, setButton] = useState(false)

    let handleDisability = (movieObj) => {
        // if movieObj is inside the cart, disabled=== true. If NOT inside the cart, disabled == false
        // setButton(true)
        // when removing, update button to be false because the movie obj is not in cart anymore
        if(cart.includes(movieObj)){
            return true
        }else{
            return false 
        }
    }
    return (
        <div>
            <span>{movie.Title}({movie.Year})</span> <button disabled={handleDisability(movie)} onClick={() => nominate(movie)}> Nominate </button>
        </div>
    );
}

export default MovieItem;