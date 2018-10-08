import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo">
            <Link to="/">
              <img src={Logo} alt="Warbler Home" />
            </Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/signin">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  null
)(Navbar);
