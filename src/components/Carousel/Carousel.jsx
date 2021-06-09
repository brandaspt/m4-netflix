import React from "react"
import CarouselItem from "./CarouselCard"
import LoadingSpinner from "../LoadingSpinner"
import scrollFunction from "../common/scrollerFunction"
import SwipeScroll from "../common/scrollClass"
import CarouselButton from "./CarouselButton"
import { Row } from "react-bootstrap"
import "./Carousel.css"

import { getFilms } from "../common/dataFetch"

class Carousel extends React.Component {
  
  state = {
    movies: [],
    isLoading: true,
    hoveringCardComms: false,
    carouselHovered: true
  }

  scrolling = false

  hoveringOverCardComms = (hovering) => {
    this.setState({...this.state, hoveringCardComms: hovering})
  }


  componentDidMount = async () => {
    this.fetchData()
    new SwipeScroll(this.carouselItemsRow)
  }

  componentDidUpdate = async (previousProps) => {
    (!(this.props.searchQuery === previousProps.searchQuery) && !(this.props.type === previousProps.type)) && this.fetchData()
  }

  fetchData = async () => {
    const result = await getFilms(this.props.searchQuery, this.props.type, this.props.page)
    if(!result.error) {
      this.setState({ ...this.state, isLoading: false, movies: result.data.Search })
    } else {
      alert('error with fetch')
    }
  }

  scroll = (num) => {
    console.log(num)
    scrollFunction(num, this.carouselItemsRow)
  }

  render() {
    return (
      <Row className="carouselRow px-5 pt-4">
        <Row>
          <h2>{this.props.carouselName}</h2>
        </Row>
        <div className="carouselWithBtns">
          <CarouselButton side='Left' scroll={this.scroll} />
          <Row
            className={this.state.carouselHovered ? "carouselItemsRow carouselPadMar" : "carouselItemsRow"}
            ref={e => (this.carouselItemsRow = e)}
          >
            {this.state.isLoading ? (
              <LoadingSpinner />
            ) : (
              this.state.movies.map((movie, i) => {
                return <CarouselItem {...movie} commHover={this.hoveringOverCardComms} key={i} />
              })
            )}
          </Row>
          <CarouselButton side='Right' scroll={this.scroll} />
        </div>
      </Row>
    )
  }
}

export default Carousel
