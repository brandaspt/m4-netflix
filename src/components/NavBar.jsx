import { Component } from "react"
import { Navbar, Nav, Dropdown, Form, FormControl } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom'
import "./css/NavBar.css"

class NavBar extends Component {
  render() {
    console.log(this.props)
    return (
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.png" width="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/series" className="nav-link">
              Series
            </Link>
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
            <Link to="/episodes" className="nav-link">
              Episodes
            </Link>
            <Link to="/recent" className="nav-link">
              Recently Added
            </Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-center">
            <Form
              inline
            >
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
              <FormControl
                id="search-input"
                size="sm"
                type="text"
                placeholder="Search"
                onChange={e => this.props.history.push(`/search/${['series', 'movies', 'episodes'].includes(this.props.match.params.type) ? this.props.match.params.type : 'movies'}/${e.currentTarget.value}`)}
              />
            </Form>
            <p className="my-0 mx-3 text-white"> KIDS</p>
            <i className="mr-3 fas fa-bell"></i>
            <Dropdown>
              <Dropdown.Toggle className="text-white p-0" as="button" id="dropdown-basic">
                <img src="/avatar.jpeg" width="30px" alt="" />
              </Dropdown.Toggle>

              <Dropdown.Menu bg="dark" align="right">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(NavBar)
