import { Component } from "react"
import { CardGroup } from "react-bootstrap"
import SearchCard from "./SearchCard"
import "./SearchGrid.css"
// import { getFilms } from "../common/dataFetch"
import CategoryBar from "./../CategoryBar"

class SearchGrid extends Component {
  state = {
    isLoading: true,
    movies: [],
  }

  componentDidMount = () => this.fetchData()

  componentDidUpdate = prevProps => this.props.location.search !== prevProps.location.search && this.fetchData()

  fetchData = async () => {
    const params = new URLSearchParams(decodeURI(this.props.location.search))
    const query = params.get("q")

    if (query.length > 2) {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=11f3c69a1c85783081c038caaf03d7c0&query=${query}`)

      if (response.ok) {
        const data = await response.json()
        this.setState({ isLoading: false, movies: data.results })
      }
    }

    // let type = params.get('t')
    // type = type === 'movies' ? 'movie' : type === 'episodes' ? 'episode' : type === 'all' ? '' : 'series'

    // const result = await getFilms(query, type)
  }

  render() {
    return (
      <CardGroup className="justify-content-center px-3">
        <CategoryBar search={true} {...this.props} />
        {this.state.movies ? this.state.movies.map(el => <SearchCard key={el.id} item={el} />) : <p>No results</p>}
      </CardGroup>
    )
  }
}

export default SearchGrid
