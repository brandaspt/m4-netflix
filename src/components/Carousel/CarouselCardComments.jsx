import React from 'react'
import CommentsList from './CommentsList'
import CommentAdd from './CommentAdd'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CardComments extends React.Component {

    state = {
        updated: false
    }

    update = () => {
        this.setState({updated: true}, () => this.setState({updated: false}))
    }

    render() {
        return (
            <div className="cardInfo d-flex flex-column">
                <Link to={'/details/' + this.props.imdbID}>
                    <Button variant="success">Details Page</Button>
                </Link>
                <CommentsList imdbID={this.props.imdbID} updated={this.state.updated} update={this.update} />
                <CommentAdd imdbID={this.props.imdbID} update={this.update} />
            </div>
        )
    }
}

export default CardComments