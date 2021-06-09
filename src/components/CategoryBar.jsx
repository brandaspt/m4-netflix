import { Component } from "react"
import { Container, Dropdown } from "react-bootstrap"
import "./css/CategoryBar.css"

const genres = ["Action", "Comedy", "Documentary", "Horror", "Scifi", "Drama"]

class CategoryBar extends Component {
  render() {
    return (
      <Container className="CategoryBar d-flex justify-content-between align-items-center" fluid>
        <div className="d-flex justify-content-start align-items-center py-3">
          <h4 className="section-title text-white mr-5 my-0">{this.props.match.params.type === 'recent' ? 'recently added' : this.props.match.params.type }</h4>
          <Dropdown>
            <Dropdown.Toggle className="text-white p-1" as="div" id="dropdown-basic">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu bg="dark" align="left">
              {genres.map(genre => (
                <Dropdown.Item key={genre}>{genre}</Dropdown.Item>
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
