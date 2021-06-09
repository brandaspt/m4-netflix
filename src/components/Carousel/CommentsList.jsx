import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import { ListGroup } from 'react-bootstrap'

import { deleteComment, getComments } from '../common/dataFetch'



class CommentsList extends React.Component {

    state = {
        comments: [],
        isLoading: true
    }

    componentDidMount = async () => {
        const result = await getComments(this.props.imdbID)
        if(!result.error) {
            this.setState({
                comments: result.data,
                isLoading: false,
            })
            this.props.update()
        }
    }

    componentDidUpdate = async () => {
        if(this.props.updated) {
            const result = await getComments(this.props.imdbID)
            if(!result.error) {
                this.setState({
                    comments: result.data,
                    isLoading: false,
                    updated: false
                })
            }
        }
    }

    delComment = async (id) => {
        this.setState({...this.state, isLoading: true})
        await deleteComment(id)
        this.props.update()
        this.setState({...this.state, isLoading: false})
    }

    render() {
        return (
            <div className="comments-list flex-grow-1">
                {
                    (
                        this.state.comments.length === 0
                        && this.state.isLoading === false
                    )
                        ? <div className="d-flex justify-content-center align-items-center"><p className="text-white pt-3">No Comments Yet</p></div>
                        : <ListGroup className="p-2 comment-list overflow-auto" variant="flush">
                            {this.state.comments.map(comment => 
                                <ListGroup.Item key={comment._id} className="d-flex flex-column comment-item" onClick={() => this.delComment(comment._id)}>
                                    <div className="d-flex text-break w-100">
                                        <span className="mr-auto">{comment.comment}</span>
                                        <span className="comment-rate">{comment.rate}/5</span>
                                    </div>
                                    <p className="commAuthor m-0">{comment.author}</p>
                                </ListGroup.Item>    
                            )}
                        </ListGroup>
                }

                {this.state.isLoading && <div className="d-flex justify-content-center align-items-center"><LoadingSpinner /></div>}
            </div>
        )
    }
}

export default CommentsList