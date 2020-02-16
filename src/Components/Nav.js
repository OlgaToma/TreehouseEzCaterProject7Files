import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

// Create a Nav component for the default search buttons. When each default search is clicked, it should run the search.
class Nav extends Component {

  onClick(search, event) {
    this.props.onSearch(search);
  }

  render() {
    return(
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/search/cats" onClick={this.onClick.bind(this,'cat')}>Cats</NavLink>
          </li>
          <li>
            <NavLink to="/search/dogs" onClick={this.onClick.bind(this,'dog')}>Dogs</NavLink>
          </li>
          <li>
            <NavLink to="/search/elephants" onClick={this.onClick.bind(this,'elephant')}>Elephants</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;