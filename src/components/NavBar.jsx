import { Component } from "react"
import { Navbar, Nav, Dropdown, Form, FormControl } from "react-bootstrap"
import "./css/NavBar.css"

class NavBar extends Component {
  state = {
    searchQuery: "",
  }

  render() {
    return (
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.png" width="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"
              onClick={() => {
              this.props.getSelectedTab("Home")
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#series"
              onClick={() => {
                this.props.getSelectedTab("Series")
              }}
            >
              Series
            </Nav.Link>
            <Nav.Link
              href="#movies"
              onClick={() => {
                this.props.getSelectedTab("Movie")
              }}
            >
              Movies
            </Nav.Link>
            <Nav.Link
              href="#episodes"
              onClick={() => {
                this.props.getSelectedTab("Episodes")
              }}
            >
              Episodes
            </Nav.Link>
            <Nav.Link href="#recently-added">Recently Added</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-center">
            <Form
              inline
              onSubmit={e => {
                e.preventDefault()
                this.props.getSearchQuery(this.state.searchQuery)
              }}
            >
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
              <FormControl
                id="search-input"
                size="sm"
                type="text"
                placeholder="Search"
                value={this.state.searchQuery}
                onChange={e => this.setState({ searchQuery: e.currentTarget.value })}
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

export default NavBar
