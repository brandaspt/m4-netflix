import React, { Component } from "react";
import { Dropdown, Button } from "react-bootstrap";

class GenresDropdown extends Component {
  render() {
    return (
      <div class="dropdown">
        <button
          class="genresButton btn btn-secondary dropdown-toggle ml-4"
          type="button genresButton"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Genres
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">
            Romance
          </a>
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Comedy
          </a>
          <a class="dropdown-item" href="#">
            Thriller
          </a>
        </div>
      </div>
    );
  }
}
export default GenresDropdown;
