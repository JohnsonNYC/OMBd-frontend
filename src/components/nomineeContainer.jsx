import React from 'react';

import NomineeItem from './nomineeItem'

const NomineeContainer = (props) => {
    const { cart, remove} = props
    console.log(cart)
    return (
        <div className='nominee-cart'>
            <h1>Your Nominee List</h1>
            <ul>
                {cart.length === 0 ? null :
                    cart.map((obj, index) => {
                        return <NomineeItem key={index} movie={obj} remove={remove}/>
                    })
                }
            </ul>
        </div>
    );
}

export default NomineeContainer;