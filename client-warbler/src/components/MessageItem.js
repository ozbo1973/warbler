import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import dfltProfileImg from "../images/default-profile-image.jpg";

const MessageItem = ({
  createDate,
  text,
  username,
  profileImgURL,
  removeMessage,
  isCorrectUser
}) => (
  <li className="collection-item avatar">
    <img
      src={profileImgURL || dfltProfileImg}
      alt={username}
      height="100"
      width="100"
      className="circle"
    />
    <div className="title-container">
      <div className="title">
        <Link to="/">@{username} &nbsp;</Link>
        <span>
          <Moment format="Do MMM YYYY">{createDate}</Moment>
        </span>
      </div>
      {isCorrectUser && (
        <a
          className="btn-floating btn-small waves-effect waves-light red"
          onClick={removeMessage}
        >
          -
        </a>
      )}
    </div>
    <p>{text}</p>
  </li>
);

export default MessageItem;
