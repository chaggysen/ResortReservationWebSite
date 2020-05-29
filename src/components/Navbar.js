import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* Link provides declarative, accessible navigation around the application.
            This link displays an image that when clicked, link to the home page*/}
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            {/* Here we create a button on the navbar We pass a className for styling and add
            an onClick that calls the handleToggle function*/}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* Here we create the list of links(home and rooms) The className(css) of the ul depends on the state of the navBar.
          If the state is open, the className includes show-nav,else the links will be hidden by default in nav-links*/}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
