import React from 'react'
import { Form, Col, Button, Row, InputGroup } from 'react-bootstrap'
import { postComment } from '../common/dataFetch'


class CommentAdd extends React.Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.imdbID
        },
        sending: false
    }

    inputChange = (e) => {
        let id = e.target.id

        this.setState({
            comment: {
                ...this.state.comment,
                [id]: e.target.value
            }
        })
    }

    sendComment = async (e) => {
        e.preventDefault()

        this.setState({...this.state, sending: true})

        const result = await postComment(this.state.comment)
        if(result.error) {
            alert("error with posting comment")    
        }

        this.props.update()

        this.setState({
            comment: {
                comment: '',
                rate: 1,
                elementId: this.props.imdbID
            },
            sending: false
        })
    }

    render () {
        return (
            <Form onSubmit={(e) => this.sendComment(e)} className="p-2 mt-2 border-top border-dark align-self-end w-100">
                <Form.Row>
                    <Col>
                        <InputGroup>
                            <Form.Control type="text" required placeholder="Your comment" autoComplete="off" value={this.state.comment.comment} id="comment" onChange={e => this.inputChange(e)} className="comment-input" />
                            <InputGroup.Append>
                                <Button variant="success" type="submit" id="sendBtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                                    </svg>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-1 justify-content-center">
                    <Row>
                        <Col xs={12}>
                            <div key={`inline-radio-${this.props.imdbID}`} className="text-white">
                                {
                                    [1, 2, 3, 4, 5].map(num => {
                                        return <Form.Check
                                            key={num}
                                            inline
                                            label={`${num}`}
                                            name={`group${this.props.imdbID}`}
                                            type="radio"
                                            id={`inline-${this.props.imdbID}-${num}`}
                                            value={num}
                                            onClick={(e) => this.setState({...this.state, comment: {...this.state.comment, rate: e.target.value}})}
                                        />
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Form.Row>
            </Form>
        )
    }
}

export default CommentAdd