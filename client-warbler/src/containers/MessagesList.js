import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessagesList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, removeMessage, currentUser } = this.props;
    let messagesList = messages.map(m => (
      <MessageItem
        key={m._id}
        createDate={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImgURl={m.user.profileImageURL}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        isCorrectUser={currentUser === m.user._id}
      />
    ));
    return (
      <div className="col s9">
        <ul className="collection">{messagesList}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id
  };
}

export default connect(
  mapStateToProps,
  { fetchMessages, removeMessage }
)(MessagesList);
