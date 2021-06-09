import { useEffect, useState } from "react"
import { getSingleMovie } from "../common/dataFetch"
import { Container } from "react-bootstrap"
import ShowDetailsInfo from './ShowDetailsInfo'
import './ShowDetails.css'
import ShowDetailsComments from "./ShowDetailsComments"


const ShowDetails = (props) => {

    const [show, setShow] = useState(null)

    useEffect(() => {
        const id = props.match.params.showId
        const fetch = async () => {
            const result = await getSingleMovie(id)
            if(!result.error) {
                setShow(result.data)
            } else {
                alert('error')
            }
        }
        fetch()
    }, [props.match.params.showId])

    return (
        <Container fluid='md'>
            {
                show ? <><ShowDetailsInfo {...show} /><ShowDetailsComments id={show.imdbID} /></> : <h1>Loading</h1>
            }
        </Container>
    )
}

export default ShowDetails