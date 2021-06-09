import { Row, Col, ListGroup } from "react-bootstrap"


const ShowDetailsInfo = (props) => {
    return (
        <Row className="showDetailsInfo">
            <Col xs={4}>
                <img src={props.Poster} alt="" />
            </Col>
            <Col xs={8}>
            <ListGroup variant="flush">
                <ListGroup.Item><h1>{props.Title}</h1></ListGroup.Item>
                <ListGroup.Item><strong>Year:</strong> {props.Year}</ListGroup.Item>
                <ListGroup.Item><strong>Runtime:</strong> {props.Runtime}</ListGroup.Item>
                <ListGroup.Item><strong>Genre:</strong> {props.Genre}</ListGroup.Item>
                <ListGroup.Item><strong>Director:</strong> {props.Director}</ListGroup.Item>
                <ListGroup.Item><strong>Plot:</strong> {props.Plot}</ListGroup.Item>
                <ListGroup.Item><strong>Awards:</strong> {props.Awards}</ListGroup.Item>
                {/* <ListGroup.Item>{props.Ratings}</ListGroup.Item> */}
                <ListGroup.Item><strong>Genre:</strong> {props.Genre}</ListGroup.Item>
                <ListGroup.Item><strong>Rating:</strong> {props.imdbRating}</ListGroup.Item>
            </ListGroup>
            </Col>
        </Row>
    )
}

export default ShowDetailsInfo