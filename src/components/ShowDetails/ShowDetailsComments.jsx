import { useEffect, useState } from "react"
import { Row, Col, ListGroup } from "react-bootstrap"
import { getComments } from "../common/dataFetch"


const ShowDetailsComments = (props) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetch = async() => {
            const result = await getComments(props.id)
            if(!result.error) {
                setComments(result.data)
            } else {
                alert('comment fetch error')
            }
        }
        fetch()
    }, [props.id])


    return (
        <Row>
            <Col>
                <ListGroup className="showDetailsComments">
                    {
                        comments.length
                        ? comments.map(comment => (
                            <ListGroup.Item>
                                <div className="d-flex justify-content-between commentInfo">
                                    <span><strong>Author:</strong> {comment.author}</span>
                                    <span><strong>Rate:</strong> {comment.rate}/5</span>
                                </div>
                                <p className="py-2 m-0"><strong>Comment:</strong></p>
                                <p className="py-2 m-0">{comment.comment}</p>
                            </ListGroup.Item>
                        ))
                        : <h1 className="text-center text-white mt-5">No comments</h1>
                    }
                </ListGroup>
            </Col>
        </Row>
    )
}

export default ShowDetailsComments