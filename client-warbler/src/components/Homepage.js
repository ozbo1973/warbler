import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1>What's Happening</h1>
        <h4>New to Warbler?</h4>

        <Link to="/signup" className="waves-effect waves-light btn">
          Sign Up
        </Link>
      </div>
    );
  }
  return (
    <div>
      <MessageTimeline
        profileImagURL={currentUser.user.profileImagURL}
        username={currentUser.user.username}
      />
      {/* logged in */}
    </div>
  );
};

export default Homepage;
