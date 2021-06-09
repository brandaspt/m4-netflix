import { Component } from "react"
import { getComments } from "../common/dataFetch"

class SearchCommentList extends Component {
  state = {
    comments: [],
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = () => {
    if (this.props.refresh) {
      this.fetchData()
      this.props.toggleRefresh()
    }
  }

  fetchData = async () => {
    const result = await getComments(this.props.imdbID)
    if(!result.error) {
      this.setState({ comments: result.data })
    }
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
