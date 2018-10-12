import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/warbler-logo.png";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo">
            <Link to="/">
              <img src={Logo} alt="Warbler Home" />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Message
                </Link>
              </li>
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            </ul>
          ) : (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signin">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
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
  { logout }
)(Navbar);
