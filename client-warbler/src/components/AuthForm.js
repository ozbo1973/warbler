import React, { Component } from "react";

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      profileImageURL: ""
    };
  }
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const authType = this.props.signup ? "signup" : "signin";
    this.props.onAuth(authType, this.state).then(() => {
      console.log("logged in");
    });
  };

  render() {
    const { email, username, password, profileImageURL } = this.state;
    const { buttonText, heading, signup } = this.props;
    return (
      <div className="container">
        <div className="form">
          <form onSubmit={this.handleOnSubmit}>
            <div className="row">
              <h1>{heading}</h1>
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={this.handleOnChange}
                />
                <label htmlFor="email">Email:</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.handleOnChange}
                />
                <label htmlFor="password">Password:</label>
              </div>
            </div>
            {signup && (
              <div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={this.handleOnChange}
                    />
                    <label htmlFor="username">Username:</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate"
                      type="text"
                      id="profileImageURL"
                      name="profileImageURL"
                      value={profileImageURL}
                      onChange={this.handleOnChange}
                    />
                    <label htmlFor="profileImageURL">Profile Image:</label>
                  </div>
                </div>
              </div>
            )}
            <button className="btn waves-effect waves-light" type="submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
