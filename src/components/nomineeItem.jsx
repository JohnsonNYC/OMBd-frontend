import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Button, Card, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const NomineeItem = (props) => {
    const { movie, remove } = props
    const [property, setProperty] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    console.log(property)
    return (
        <Col sm="6" >
            <animated.div style={useSpring({ opacity: 1, from: { opacity: 0 },config:{duration:1000} })} className='card'>
                    <Card>
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