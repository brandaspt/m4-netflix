import { Component } from "react"
import { Container, Dropdown } from "react-bootstrap"
import "./css/CategoryBar.css"

const genres = ["Action", "Comedy", "Documentary", "Horror", "Scifi", "Drama"]
const types = ["Movies", "Episodes", "Series", "All"]

class CategoryBar extends Component {

  state = {
    genre: ''
  }

  componentDidMount = () => {
    this.props.search ? this.setState({genre: "Type"}) : this.setState({genre: "Genre"})
  }

  changeType = (type) => {
    this.setState({genre: type})
    const queryParams = new URLSearchParams(this.props.location.search)
    queryParams.set('t', type.toLowerCase())
    this.props.history.push('/search/?' + queryParams.toString())
  }

  render() {
    return (
      <Container className="CategoryBar d-flex justify-content-between align-items-center" fluid>
        <div className="d-flex justify-content-start align-items-center py-3">
          <h4 className="section-title text-white mr-5 my-0">
            {
              this.props.search ? 'Search' : this.props.match.params.type === 'recent' ? 'recently added' : this.props.match.params.type
            }
          </h4>
          <Dropdown>
            <Dropdown.Toggle className="text-white p-1" as="div" id="dropdown-basic">
              {this.state.genre}
            </Dropdown.Toggle>

            <Dropdown.Menu bg="dark" align="left">
              {(this.props.search ? types : genres).map(genre => (
                <Dropdown.Item key={genre} onClick={this.props.search ? () => this.changeType(genre) : null}>{genre}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex ml-auto right-icons">
          <i className="px-3 py-2 fas fa-align-left"></i>
          <i className="px-3 py-2 fas fa-th-large"></i>
        </div>
      </Container>
    )
  }
}

export default CategoryBar
