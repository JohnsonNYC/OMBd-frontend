import React from 'react'
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap'

const NomineeItem = (props) => {
    const { movie, remove } = props
    return (
        <Col >
            <Card>
                <div style={{width:'100%'}}>
                    <CardImg bottom src={movie.Poster} alt={movie.Title} />
                </div>
                <CardBody style={{ justifyContent: 'center' }}>
                    <CardTitle>{movie.Title}</CardTitle>
                    <CardSubtitle>{movie.Year}</CardSubtitle>
                    <Button color='warning' onClick={() => remove(movie)}> Remove </Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default NomineeItem;