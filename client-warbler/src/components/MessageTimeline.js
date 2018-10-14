import React from "react";
import MessagesList from "../containers/MessagesList";
import UserAside from "./UserAside";

const MessageTimeline = ({ profileImageURL, username }) => {
  return (
    <div className="MessageTimeline">
      <div className="row">
        <UserAside profileImgURL={profileImageURL} username={username} />
        <MessagesList />
      </div>
    </div>
  );
};

export default MessageTimeline;
