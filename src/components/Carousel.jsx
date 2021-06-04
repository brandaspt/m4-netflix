import React from "react"
import CarouselItem from "./CarouselItem"
import LoadingSpinner from "./LoadingSpinner"
import SwipeScroll from "./helpers/scroll"
import { Row } from "react-bootstrap"
import "./css/Carousel.css"

class Carousel extends React.Component {
  state = {
    movies: [],
    isLoading: true,
  }

  componentDidMount = async () => {
    this.fetchData()
  }

  componentDidUpdate = async () => {
    this.fetchData()
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
        this.setState({ isLoading: false, movies: data.Search })
        new SwipeScroll(this.carouselItemsRow)
      } else {
        console.log("error with fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }

  scroll = e => {
    if (e.deltaY < 0) {
      if (window.innerWidth >= 0 && window.innerWidth <= 576) {
        this.carouselItemsRow.scrollLeft += window.innerWidth / 2
      } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
        this.carouselItemsRow.scrollLeft += window.innerWidth / 3
      } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        this.carouselItemsRow.scrollLeft += window.innerWidth / 6
      } else {
        this.carouselItemsRow.scrollLeft += window.innerWidth / 8
      }
    } else {
      if (window.innerWidth >= 0 && window.innerWidth <= 576) {
        this.carouselItemsRow.scrollLeft -= window.innerWidth / 2
      } else if (window.innerWidth > 576 && window.innerWidth <= 768) {
        this.carouselItemsRow.scrollLeft -= window.innerWidth / 3
      } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
        this.carouselItemsRow.scrollLeft -= window.innerWidth / 6
      } else {
        this.carouselItemsRow.scrollLeft -= window.innerWidth / 8
      }
    }
  }

  render() {
    return (
      <Row className="carouselRow px-5 pt-4">
        <Row>
          <h2>{this.props.carouselName}</h2>
        </Row>
        <Row
          className="carouselItemsRow"
          onWheel={e => this.scroll(e)}
          onScroll={e => this.scroll(e)}
          ref={e => (this.carouselItemsRow = e)}
        >
          {this.state.isLoading ? (
            <LoadingSpinner />
          ) : (
            this.state.movies.map((movie, i) => {
              return <CarouselItem {...movie} key={i} />
            })
          )}
        </Row>
      </Row>
    )
  }
}

export default Carousel
