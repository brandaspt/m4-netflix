import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './css/CarouselItemCommentList.css'

class CarouselItemCommentList extends React.Component {

    render() {
        return (
            <Col xs={12} sm={6} md={3} lg={2} className="carouselCardCol py-3 px-0">
                <Card className="mx-1">
                    <Card.Img variant="top" src={this.props.Poster} />
                    <Card.Body className="cardBody">
                        <Card.Title>{this.props.Title}</Card.Title>
                        <div className="d-flex justify-content-between pr-2">
                            <Card.Text>{this.props.Year}</Card.Text>
                            <Card.Text>{this.props.Type}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CarouselItemCommentList
