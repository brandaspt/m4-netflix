import { Component } from "react"

class SearchCommentList extends Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = prevProps => {
    // if (this.props.imdbID !== prevProps.imdbID) this.fetchData()
    if (this.props.refresh) {
      this.fetchData()
      this.props.toggleRefresh()
    }
  }

  fetchData = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.imdbID}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNTk2NGNlYWY0ODAwMTVjOTE5MzYiLCJpYXQiOjE2MjIwMzg4ODQsImV4cCI6MTYyMzI0ODQ4NH0.kcSw_K1mFlUoMMV0Ht3yenaWNHGapnpFfnPfWPee6cU",
      },
    })
    const data = await response.json()
    console.log(data)
    this.setState({ comments: data })
  }

  render() {
    return (
      <ul className="list-unstyled ml-3">
        {this.state.comments.map(comment => (
          <li key={comment._id}>
            <p className="m-0 text-muted">
              by <strong>{comment.author}</strong>
            </p>
            <p className="mb-1">{comment.comment}</p>
            <hr className="my-1 bg-light" />
          </li>
        ))}
      </ul>
    )
  }
}

export default SearchCommentList
