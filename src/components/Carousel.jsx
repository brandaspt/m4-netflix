import React from "react"
import CarouselItem from "./CarouselItem"
import LoadingSpinner from "./LoadingSpinner"
import scrollFunction from "./helpers/scrollerFunction"
import SwipeScroll from "./helpers/scrollClass"
import { Row } from "react-bootstrap"
import "./css/Carousel.css"

class Carousel extends React.Component {
  state = {
    movies: [],
    isLoading: true,
    oldSearch: this.props.searchQuery,
    oldType: this.props.type,
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

  componentDidUpdate = async () => {

    if (
      !(this.props.searchQuery === this.state.oldSearch) &&
      !(this.props.type === this.state.oldType) &&
      !(this.props.page === this.state.oldPage)
    ) {
      this.setState({ ...this.state, oldSearch: this.props.searchQuery, oldType: this.props.type, oldPage: this.props.page })
      this.fetchData()
    }
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c4961d1f&s=${this.props.searchQuery}&type=${
          this.props.type === "home" ? "movie" : this.props.type
        }&page=${this.props.page}`
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({ ...this.state, isLoading: false, movies: data.Search })
      } else {
        console.log("error with fetching")
      }
    } catch (error) {
      console.log(error)
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
