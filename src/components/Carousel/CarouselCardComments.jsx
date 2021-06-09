import React from 'react'
import CommentsList from './CommentsList'
import CommentAdd from './CommentAdd'

class CardComments extends React.Component {

    state = {
        updated: false
    }

    update = () => {
        this.setState({updated: true}, () => this.setState({updated: false}))
    }

    render() {
        return (
            <div className="cardInfo d-flex flex-column" onMouseOver={() => this.props.commHover(true)} onMouseLeave={() => this.props.commHover(false)}>
                <CommentsList imdbID={this.props.imdbID} updated={this.state.updated} update={this.update} />
                <CommentAdd imdbID={this.props.imdbID} update={this.update} />
            </div>
        )
    }
}

export default CardComments