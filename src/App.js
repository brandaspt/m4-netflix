import { Component } from "react"
import NavBar from "./components/NavBar"
import CategoryBar from "./components/CategoryBar"
import Carousel from "./components/Carousel"
import SearchGrid from "./components/SearchGrid"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  state = {
    contentType: "home",
    searchQuery: "",
    page: 0,
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

  defaultCarousels = [{carouselName: 'Harry Potter', searchQuery: 'harry potter', type: "movie", page: 1},
                      {carouselName: 'Star Wars', searchQuery: 'star wars', type: "movie", page: 1},
                      {carouselName: 'Lord Of The Rings', searchQuery: 'lord rings', type: "movie", page: 1}]

  render() {
    console.log(this.state.contentType)
    return (
      <div className="App">
        <NavBar getSelectedTab={this.setSelectedTab} getSearchQuery={this.setSearchQuery} />
        <CategoryBar title={this.state.contentType} />
        {this.state.searchQuery !== "" ? (
          <SearchGrid searchQuery={this.state.searchQuery} type={this.state.contentType} />
        ) : (
          this.defaultCarousels.map(carousel => <Carousel {...carousel} />)
        )}
        <Footer />
      </div>
    )
  }
}

export default App
