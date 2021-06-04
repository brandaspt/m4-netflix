import "../components/css/Footer.css";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Container fluid className="Footer ">
        <Container>
          <Row>
            <Col className="col-12 col-md-6 col-lg-3 mt-5 icons">
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
                  <a href="#">Media Centrer</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Audio and Subtitles</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#">Help Centre</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#">Buy gift cards</a>
                </li>
                <li>
                  <a href="#">Netflix Originals</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </Col>
            <Col className="col-12 col-md-6 col-lg-3">
              <ul>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Footer;
