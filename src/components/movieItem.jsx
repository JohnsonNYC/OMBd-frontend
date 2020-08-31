import React from 'react';

const MovieItem = (props) => {
    const { movie } = props
    console.log('movieItem', movie)
    return (
        <div>
            <span>{movie.Title}({movie.Year})</span> <button> Nominate </button>
        </div>
    );
}

export default MovieItem;