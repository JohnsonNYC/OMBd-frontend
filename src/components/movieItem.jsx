import React, { useState } from 'react';

const MovieItem = (props) => {
    const { movie, nominate } = props
    const [button, setButton] = useState(false)
    return (
        <div>
            <span>{movie.Title}({movie.Year})</span> <button disabled={button} onClick={() => { nominate(movie); setButton(!button) }}> Nominate </button>
        </div>
    );
}

export default MovieItem;