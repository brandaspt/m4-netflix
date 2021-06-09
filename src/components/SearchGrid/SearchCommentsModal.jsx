import { Component } from "react"
import { Button } from "react-bootstrap"
import NewCommentForm from "./NewCommentForm"
import SearchCommentList from "./SearchCommentList"

class SearchCommentsModal extends Component {
  
  state = { 
    refreshCommentList: false 
  }

  toggleRefresh = () => {
    this.setState({ refreshCommentList: !this.state.refreshCommentList })
  }

  render() {
    return (
      <div className="myModal" onClick={this.props.onClose}>
        <div className="myModal-content" onClick={e => e.stopPropagation()}>
          <div className="myModal-header">
            <h4 className="text-center">Comments for movie {this.props.title}</h4>
          </div>
          <div className="myModal-body">
            <div className="d-flex">
              <div>
                <img width="200px" src={this.props.poster} alt="" />
              </div>
              <SearchCommentList
                refresh={this.state.refreshCommentList}
                toggleRefresh={this.toggleRefresh}
                imdbID={this.props.imdbID}
              />
            </div>
            <NewCommentForm
              toggleRefresh={this.toggleRefresh}
              imdbID={this.props.imdbID}
            />
          </div>
          <div className="myModal-footer text-right">
            <Button className="btn-sm" variant="danger" onClick={this.props.onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchCommentsModal
