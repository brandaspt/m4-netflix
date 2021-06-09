import React from 'react'
import { Col, Card } from 'react-bootstrap'
import CardComments from './CarouselCardComments'

class CarouselItem extends React.Component {

    state = {
        hovered: false,
        last: false
    }

    isLast = (e) => {
        const cardRect = e.target.getBoundingClientRect()
        const windowMinusRect = window.innerWidth - cardRect.width
        if(windowMinusRect > cardRect.left && windowMinusRect < cardRect.right) {
            this.setState({hovered: true, last: true})
        } else {
            this.setState({hovered: true, last: false})
        }
    }

    render() {
        return (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} className="carouselCardCol py-3 px-0">    
                <Card className={this.state.last ? "mx-1 lastCardInCarousel" : "mx-1"} onMouseOver={(e) => {this.setState({...this.state, hovered: true}); this.isLast(e)}} onMouseLeave={() => {this.setState({...this.state, hovered: false}); this.props.commHover(false)}}>
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
                    {this.state.hovered && <CardComments imdbID={this.props.imdbID} commHover={this.props.commHover} />}
                </Card> 
            </Col>
        )
    }
}

export default CarouselItem
