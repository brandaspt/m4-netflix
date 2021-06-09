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
    if (prevProps.match.params.query !== this.props.match.params.query || prevProps.match.params.type !== this.props.match.params.type) this.fetchData()
  }

  fetchData = async () => {
    const type = this.props.match.params.type === 'movies' ? 'movie' : this.props.match.params.type === 'episodes' ? 'episode' : this.props.match.params.type
    const result = await getFilms(this.props.match.params.query, type)
    if(!result.error) {
      this.setState({ isLoading: false, movies: result.data.Search })
    }
  }

  render() {
    return (
      <CardGroup className="justify-content-center px-3">
        {this.state.movies ? this.state.movies.map(el => <SearchCard key={el.imdbID} item={el} />) : <p>No results</p>}
      </CardGroup>
    )
  }
}

export default SearchGrid
