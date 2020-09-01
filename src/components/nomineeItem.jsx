import React from 'react'
import { Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, Col } from 'reactstrap'

const NomineeItem = (props) => {
    const { movie, remove } = props
    return (
        <Col sm="6">
            <Card>
                <img width="100%" style={{height:'auto', maxHeight: `350px`,width:'auto',maxWidth:'250px'}} src={movie.Poster} alt={movie.Title} />
                <CardBody body>
                    <CardTitle>{movie.Title}</CardTitle>
                    <CardSubtitle>{movie.Year}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <Button color='warning' onClick={() => remove(movie)}> Remove </Button>
                </CardBody>
            </Card>
        </Col>
    );
}


export default NomineeItem;