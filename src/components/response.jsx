import React from 'react';

import MovieItem from './movieItem'
const Response = (props) => {
    const { movies } = props
    console.log(movies)

    return (
        <div style={{ backgroundColor: 'beige' }}>
            {/* {movies[0].Error ? <p>{movies[0].Error}</p> :
                movies[0].Search.slice(0, 5).map((movie, index) => {
                    return <MovieItem key={index} movie={movie} />
                })} */}
            {movies[0] && movies[0].Error ?
                <div>{movies[0].Error}</div> :
                movies[0] && movies[0].Search ? <div>{movies[0].Search.slice(0, 5).map((movie, index) => { return <MovieItem key={index} movie={movie} /> })}</div> :
                    <p>Search Key does not exist</p>
            }
        </div>
    )
}

export default Response;