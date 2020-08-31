import React from 'react';

import Response from './response'

const ResponseContainer = (props) => {
    const { movies, nominate, cart } = props
    return (
        <div className='response-container'>
            <Response movies={movies} nominate={nominate} cart={cart} />
        </div>
    )
}

export default ResponseContainer;