import React from 'react';

const MovieItem = (props) => {
    const {movie} = props
    return ( 
        <div>
            <p>{movie.Title}</p>
        </div>
    );
}

export default MovieItem;