import "../components/css/Footer.css"
import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

class Footer extends Component {
  render() {
    return (
      <Container fluid className="Footer">
        <Container>
          <Row>
            <Col className="col-12 col-md-6 col-lg-3 mt-4 icons">
              <a href="https://www.facebook.com/netflix">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/netflixuk?lang=en">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://www.snapchat.com/add/netflix">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCWOA1ZGywLbqmigxE4Qlvuw">
                <i className="fab fa-youtube"></i>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Audio and Subtitles</a>
                </li>
                <li>
                  <a href="#home">Media Centrer</a>
                </li>
                <li>
                  <a href="#home">Privacy</a>
                </li>
                <li>
                  <a href="#home">Contact Us</a>
                </li>
              </ul>
              <Button className="mb-2 mt-3" variant="black">Service Code</Button>
              <p>Ⓒ 1997-2019 Netflix, Inc.</p>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Audio Description</a>
                </li>
                <li>
                  <a href="#home">Investor Relaions</a>
                </li>
                <li>
                  <a href="#home">Legal Notices</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Help Center</a>
                </li>
                <li>
                  <a href="#home">Jobs</a>
                </li>
                <li>
                  <a href="#home">Cookie Preferences</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#home">Gift Cards</a>
                </li>
                <li>
                  <a href="#home">Terms of Use</a>
                </li>
                <li>
                  <a href="#home">Corporate Information</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        r
      </Container>
    )
  }
}
export default Footer
