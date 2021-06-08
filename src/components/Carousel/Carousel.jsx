import React from "react"
import CarouselItem from "./CarouselCard"
import LoadingSpinner from "../LoadingSpinner"
import scrollFunction from "../common/scrollerFunction"
import SwipeScroll from "../common/scrollClass"
import { Row } from "react-bootstrap"
import "./Carousel.css"

import { getFilms } from "../common/dataFetch"

class Carousel extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    hoveringCardComms: false,
    carouselHovered: false
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

  render() {
    return (
      <Row className="carouselRow px-5 pt-4">
        <Row>
          <h2>{this.props.carouselName}</h2>
        </Row>
        <Row
          className={this.state.carouselHovered ? "carouselItemsRow carouselPadMar" : "carouselItemsRow"}
          onMouseEnter={() => {document.body.style.overflow = "hidden"; document.body.style.paddingRight = '17px'; this.setState({...this.state, carouselHovered: true})}}
          onMouseLeave = {() => {document.body.style.overflow = "visible"; document.body.style.paddingRight = '0px'; this.setState({...this.state, carouselHovered: false, hoveringCardComms: false})}}
          onWheel={e => scrollFunction(e, this.state.hoveringCardComms, this.state.carouselHovered, this.carouselItemsRow)}
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
      </Row>
    )
  }
}

export default Carousel
