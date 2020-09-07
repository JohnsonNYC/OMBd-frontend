import React from 'react';
import {Container} from 'reactstrap'
import MovieItem from './movieItem'
const Response = (props) => {
    const { movies, nominate, cart } = props

    return (
        <Container style={{ justifyContent:'center', alignContent:'center' }}>
            {movies[0] && movies[0].Error ?
                <div>Refine Your Search</div> :
                movies[0] && movies[0].Search ? <div>{movies[0].Search.slice(0, 5).map((movie, index) => { return <MovieItem key={index} movie={movie} nominate={nominate} cart={cart} /> })}</div> :
                    // <p>Refine movie search</p>
                    null
            }
        </Container>
    )
}

export default Response;