import React from "react";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({ profileImgURL, username }) => {
  let profileImg = () => {
    if (!profileImgURL || profileImgURL === "xxx") {
      return DefaultProfileImage;
    }
    return profileImgURL;
  };
  return (
    <div className="col s3">
      <div className="UserAside">
        <img src={profileImg()} alt={username} width="200" height="200" />
      </div>
    </div>
  );
};

export default UserAside;
