import React from 'react';
import {Container, Row } from 'reactstrap'
import NomineeItem from './nomineeItem'

const NomineeContainer = (props) => {
    const { cart, remove } = props

    return (
        <Container className='nominee-cart'>
            <h1>Your Nominee List</h1>
            <h2>{cart.length >= 5 ? "Reached Maximum Nominations" : null}</h2>
            <Row xs="3" sm="2" md="4">
                {cart.length === 0 ? null :
                    cart.map((obj, index) => {
                        return <NomineeItem key={index} movie={obj} remove={remove} />
                    })
                }
            </Row>
        </Container>
    );
}

export default NomineeContainer;