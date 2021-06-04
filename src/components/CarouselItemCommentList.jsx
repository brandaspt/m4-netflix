import React from 'react'
import { ListGroup } from 'react-bootstrap'
// import LoadingSpinner from './LoadingSpinner'
import './css/CarouselItemCommentList.css'

class CarouselItemCommentList extends React.Component {

    state = {
        comments: [],
        isLoading: false
    }

    componentDidMount = () => {
        this.fetchComments()
    }

    fetchComments = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
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

    render() {
        return ( 
            <div className="commentsSection">

                <ListGroup className="d-none">
                    {
                        this.state.comments.map(comm => {
                            return <ListGroup.Item className="d-flex"><span className="mr-auto">{comm.comment}</span><span>{comm.rate}/5</span></ListGroup.Item>    
                        })
                    }
                </ListGroup>
                

                {/* {this.state.isLoading && <LoadingSpinner />} */}
            </div>
        )
        }
}

export default CarouselItemCommentList
