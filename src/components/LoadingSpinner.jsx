import { Spinner } from 'react-bootstrap'

const LoadingSpinner = (props) => <Spinner animation="border" variant={props.variant ? props.variant : "success"} />

export default LoadingSpinner