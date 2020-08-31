import React from 'react';

const MovieItem = (props) => {
    const { movie, nominate } = props
    return (
        <div>
            <span>{movie.Title}({movie.Year})</span> <button onClick={() => nominate(movie)}> Nominate </button>
        </div>
    );
}

export default MovieItem;