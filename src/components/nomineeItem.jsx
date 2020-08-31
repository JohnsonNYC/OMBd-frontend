import React from 'react'

const NomineeItem = (props) => {
    const { movie, remove } = props
    return (
        <li>
            {movie.Title} ({movie.Year}) <button onClick={()=> remove(movie)}> Remove </button>
        </li>
    );
}

export default NomineeItem;