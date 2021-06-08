import { Component } from "react"
import { CardGroup } from "react-bootstrap"
import SearchCard from "./SearchCard"
import "./SearchGrid.css"
import { getFilms } from "../common/dataFetch"

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
    const result = await getFilms(this.props.searchQuery, this.props.type)
    if(!result.error) {
      this.setState({ isLoading: false, movies: result.data.Search })
    }
  }

  render() {
    console.log(this.state.movies)
    return (
      <CardGroup className="justify-content-center px-3">
        {this.state.movies ? this.state.movies.map(el => <SearchCard key={el.imdbID} item={el} />) : <p>No results</p>}
      </CardGroup>
    )
  }
}

export default SearchGrid
