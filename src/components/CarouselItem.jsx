import React from 'react'
import { Col, Card } from 'react-bootstrap'
import CarouselItemCommentList from './CarouselItemCommentList'
import './css/CarouselItem.css'

class CarouselItem extends React.Component {
    state = {
        overflow: false
    }

    render() {
        return (
            <Col xs={12} sm={6} md={3} lg={2} className={this.state.overflow ? "carouselCardCol py-3 px-0 disableOverflow" : "carouselCardCol py-3 px-0"} >
                <Card className="mx-1" onMouseEnter={() => this.setState({overflow: true})} onMouseLeave={() => this.setState({overflow: false})}>
                    <Card.Img variant="top" src={this.props.Poster} />
                    <Card.Body className="cardBody">
                        <Card.Title>{this.props.Title}</Card.Title>
                        <div className="d-flex justify-content-between pr-2">
                            <Card.Text>{this.props.Year}</Card.Text>
                            <Card.Text>{this.props.Type}</Card.Text>
                        </div>
                    </Card.Body>
                    <CarouselItemCommentList id={this.props.imdbID} />
                </Card>
            </Col>
        )
    }
}

export default CarouselItem
