import React from 'react';

import MovieItem from './movieItem'
const Response = (props) => {
    const { movies } = props
    console.log(movies)
    return (
        <div style={{ backgroundColor: 'beige' }}>
            {movies[0].Error ? <p>Could Not Find Movie</p> :
                movies[0].Search.slice(0, 5).map((movie, index) => {
                    return <MovieItem key={index} movie={movie} />
                })
            }
        </div>
    );
}

export default Response;