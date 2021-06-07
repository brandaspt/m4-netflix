import { Component } from "react"
import { Form, Button } from "react-bootstrap"
import "../css/NewCommentForm.css"

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

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNTk2NGNlYWY0ODAwMTVjOTE5MzYiLCJpYXQiOjE2MjIwMzg4ODQsImV4cCI6MTYyMzI0ODQ4NH0.kcSw_K1mFlUoMMV0Ht3yenaWNHGapnpFfnPfWPee6cU",
        },
        body: JSON.stringify(payload),
      })
      this.props.toggleRefresh()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
