import React from 'react'
import { Col, Card } from 'react-bootstrap'
import './css/CarouselItem.css'

class CarouselItem extends React.Component {

    state = {
        hovered: false,
    }

    render() {
        return (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} className="carouselCardCol py-3 px-0 pushCard">    
                <Card className="mx-1" onMouseOver={() => this.setState({hovered: true})} onMouseOut={() => this.setState({hovered: false})}>
                    <div className="cardImgWrapper">
                        <Card.Img variant="top" src={this.props.Poster} />
                    </div>
                    <Card.Body className="cardBody">
                        <Card.Title>{this.props.Title}</Card.Title>
                        <div className="d-flex justify-content-between pr-2">
                            <Card.Text>{this.props.Year}</Card.Text>
                            <Card.Text>{this.props.Type}</Card.Text>
                        </div>
                    </Card.Body>
                    <div className={this.state.hovered ? "cardInfo" : "cardInfo d-none"}>
                        hello
                    </div>
                </Card> 
            </Col>
        )
    }
}

export default CarouselItem
