import { Component } from "react"
import { Col, Card } from "react-bootstrap"

class SearchCard extends Component {
  state = {
    selected: false,
  }
  render() {
    console.log(this.props.item)
    return (
      <Col sm={6} md={4} lg={3}>
        <Card
          className="my-3"
          onClick={() => {
            this.setState({ selected: !this.state.selected })
          }}
        >
          <Card.Img className="img-fluid" variant="top" src={this.props.item.Poster} />
          <Card.Body className="text-center">
            <Card.Title>{this.props.item.Title}</Card.Title>{" "}
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SearchCard
