import { Component } from "react"
import NavBar from "./components/NavBar"
import CategoryBar from "./components/CategoryBar"
import Carousel from "./components/Carousel"
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

  render() {
    console.log(this.state.searchQuery !== "")

    return (
      <div className="App">
        <NavBar getSelectedTab={this.setSelectedTab} getSearchQuery={this.setSearchQuery} />
        <CategoryBar title={this.state.contentType} />
        {this.state.searchQuery !== "" ? (
          <>
            <Carousel carouselName="Search results page: 1" searchQuery={this.state.searchQuery} type={this.state.contentType} page={1} />
            <Carousel carouselName="Search results page: 2" searchQuery={this.state.searchQuery} type={this.state.contentType} page={2} />
            <Carousel carouselName="Search results page: 3" searchQuery={this.state.searchQuery} type={this.state.contentType} page={3} />
          </>
        ) : (
          <>
            <Carousel carouselName="Harry Potter" searchQuery="harry potter" type="movie" page={1} />
            <Carousel carouselName="Star Wars" searchQuery="star wars" type="movie" page={1} />
            <Carousel carouselName="Lord of the Rings" searchQuery="lord rings" type="movie" page={1} />
          </>
        )}
        <Footer />
      </div>
    )
  }
}

export default App
