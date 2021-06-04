import { Component } from "react"
import NavBar from "./components/NavBar"
import CategoryBar from "./components/CategoryBar"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  state = {
    contentType: "series",
    searchQuery: "",
  }

  setSelectedTab = contentType => {
    this.setState({
      contentType: contentType.toLowerCase(),
    })
  }

  setSearchQuery = searchQuery => {
    this.setState({
      searchQuery: searchQuery.toLowerCase(),
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar selectedTab={this.setSelectedTab} getSearchQuery={this.setSearchQuery} />
        <CategoryBar title={this.state.contentType} />
      </div>
    )
  }

}

export default App
