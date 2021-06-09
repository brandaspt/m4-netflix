import { Component } from "react"
import { Col, Card, Button } from "react-bootstrap"
import SearchCommentsModal from "./SearchCommentsModal"
import { Link } from 'react-router-dom'

class SearchCard extends Component {
  state = {
    showModal: false,
  }

  componentDidUpdate = () => {
    if (this.state.showModal) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
  }

  render() {
    return (
      <Col xs={6} sm={4} md={3} lg={2}>
        <Card className="my-3 border-0 search-card">
          <Card.Img className="img-fluid" variant="top" src={this.props.item.Poster} />
          <Card.Body className="text-center p-1 text-white">
            <Card.Text className="m-0">{this.props.item.Title}</Card.Text>
            <Card.Text className="year">{this.props.item.Year}</Card.Text>
            <Button className="btn btn-warning btn-sm mb-2" onClick={() => this.setState({ showModal: true })}>
              Comments
            </Button>
            <Link to={"/details/" + this.props.item.imdbID}>
              <Button className="btn btn-info btn-sm mb-2 ml-5" onClick={() => this.setState({ showModal: true })}>
                Detail
              </Button>
            </Link>
          </Card.Body>
        </Card>
        {this.state.showModal && (
          <SearchCommentsModal
            onClose={() => this.setState({ showModal: false })}
            imdbID={this.props.item.imdbID}
            title={this.props.item.Title}
            poster={this.props.item.Poster}
          />
        )}
      </Col>
    )
  }
}

export default SearchCard
