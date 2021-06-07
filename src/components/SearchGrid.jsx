import { Component } from "react"
import { CardGroup } from "react-bootstrap"
import SearchCard from "./SearchCard"
import "./css/SearchGrid.css"

class SearchGrid extends Component {
  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = prevProps => {
    if (prevProps.searchQuery !== this.props.searchQuery || prevProps.type !== this.props.type) this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c4961d1f&s=${this.props.searchQuery}&type=${this.props.type === "home" ? "movie" : this.props.type}`
      )
      if (response.ok) {
        const data = await response.json()
        this.setState({ isLoading: false, movies: data.Search })
      } else {
        console.log("error with fetching")
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    console.log(this.state.movies)
    return (
      <CardGroup className="justify-content-center">
        {this.state.movies ? this.state.movies.map(el => <SearchCard key={el.imdbID} item={el} />) : <p>No results</p>}
      </CardGroup>
    )
  }
}

export default SearchGrid
