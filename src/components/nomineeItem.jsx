import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Button, Card, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap'

const NomineeItem = (props) => {
    const { movie, remove } = props
    return (

        <Col sm="6" >
            <animated.div style={useSpring({opacity:1, from:{opacity:0}})} className='animated'>
                <Card >
                    <img width="100%" style={{ height: 'auto', maxHeight: `350px`, width: 'auto', maxWidth: '250px', alignSelf: 'center' }} src={movie.Poster} alt={movie.Title} />
                    <CardBody >
                        <CardTitle>{movie.Title}</CardTitle>
                        <CardSubtitle>{movie.Year}</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <Button color='warning' onClick={() => remove(movie)}> Remove </Button>
                    </CardBody>
                </Card>
            </animated.div>
        </Col>
    );
}


export default NomineeItem;