import React from 'react'
import LoadingSpinner from './LoadingSpinner'
import { ListGroup } from 'react-bootstrap'
import './css/CommentsList.css'



class CommentsList extends React.Component {

    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.imdbID, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })

            let comments = await response.json()

            this.setState({
                comments: comments,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false})
        }
    }

    componentDidUpdate = async () => {
        if(this.props.updated) {
            try {
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.imdbID, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                    }
                })

                let comments = await response.json()

                this.setState({
                    comments: comments,
                    isLoading: false
                })
            } catch (error) {
                console.log(error)
                this.setState({ isLoading: false})
            }
        }
    }

    deleteComment = async (id) => {
        this.setState({...this.state, isLoading: true})
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })

            if(await response.ok) {
                this.setState({...this.state, isLoading: false})
                this.props.commentsUpdated()
            }

        } catch (error) {
            console.log(error)
            this.setState({...this.state, isLoading: false})
        }
    }

    render() {
        return (
            <div className="comments-list flex-grow-1">
                {
                    (
                        this.state.comments.length === 0
                        && this.state.isLoading === false
                    )
                        ? <div className="d-flex justify-content-center align-items-center"><p className="text-white">No Comments Yet</p></div>
                        : <ListGroup className="p-2 comment-list overflow-auto" variant="flush">
                            {this.state.comments.map(comment => 
                                <ListGroup.Item className="d-flex text-break comment-item" onClick={() => this.deleteComment(comment._id)}><span className="mr-auto">{comment.comment}</span><span className="comment-rate">{comment.rate}/5</span></ListGroup.Item>    
                            )}
                        </ListGroup>
                }

                {this.state.isLoading && <div className="d-flex justify-content-center align-items-center"><LoadingSpinner /></div>}
            </div>
        )
    }
}

export default CommentsList