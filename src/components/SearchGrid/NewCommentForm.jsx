import { Component } from "react"
import { Form, Button } from "react-bootstrap"
import { postComment } from "../common/dataFetch"

class NewCommentForm extends Component {
  state = {
    newComment: "",
    newRating: 1,
  }

  handleSubmit = async e => {
    e.preventDefault()
    const payload = {
      rate: this.state.newRating,
      comment: this.state.newComment,
      elementId: this.props.imdbID,
    }

    const result = await postComment(payload)
    if(result.error) {
      console.log('error posting comment')
    }
    this.props.toggleRefresh()
  }

  render() {
    return (
      <Form className="d-flex flex-column" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            id="rating-input"
            as="select"
            value={this.state.newRating}
            onChange={e => this.setState({ newRating: e.currentTarget.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Leave a comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.newComment}
            onChange={e => this.setState({ newComment: e.currentTarget.value })}
          />
        </Form.Group>
        <Button className="btn-sm align-self-start" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default NewCommentForm
