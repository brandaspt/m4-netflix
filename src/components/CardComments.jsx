import React from 'react'
import './css/CardComments.css'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CardComments extends React.Component {

    state = {
        updated: false
    }

    commentsUpdated = () => {
        this.setState({updated: true}, () => this.setState({updated: false}))
    }

    render() {
        return (
            <div className="cardInfo d-flex flex-column" onMouseOver={() => this.props.commHover(true)} onMouseLeave={() => this.props.commHover(false)}>
                <CommentsList imdbID={this.props.imdbID} commentsUpdated={this.commentsUpdated} updated={this.state.updated} />
                <AddComment imdbID={this.props.imdbID} commentsUpdated={this.commentsUpdated} />
            </div>
        )
    }
}

export default CardComments