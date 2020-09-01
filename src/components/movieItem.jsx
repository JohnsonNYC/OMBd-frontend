import React from 'react';

import {Button} from 'reactstrap';

const MovieItem = (props) => {
    const { movie, nominate, cart } = props

    let handleDisability = (movieObj) => {
        // if movieObj is inside the cart, disabled=== true. If NOT inside the cart, disabled == false
        // setButton(true)
        // when removing, update button to be false because the movie obj is not in cart anymore
        if (cart.includes(movieObj)) {
            return true
        } else {
            return false
        }
    }

    return (
        <div>
            <span>{movie.Title}({movie.Year})</span> <Button outline size='sm' color='info' disabled={handleDisability(movie)} onClick={() => nominate(movie)}> Nominate </Button>
            <br/>
        </div>
    );
}

export default MovieItem;