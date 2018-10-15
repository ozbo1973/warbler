import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { messageInput: "" };
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.messageInput, this.props.history);
    this.setState({
      messageInput: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleOnSubmit}>
          {this.props.errors.message && (
            <div className="errors new badge red">
              {this.props.errors.message}
            </div>
          )}
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                className="validate"
                name="messageInput"
                id="messageInput"
                onChange={this.handleOnChange}
                value={this.state.messageInput}
              />
              <label htmlFor="messageInput">Type a Message</label>
            </div>
          </div>
          <div className="form-btn">
            <button className="btn waves-effect waves-light" type="submit">
              Add The Message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { postNewMessage }
)(MessageForm);
