const jwt = require("jsonwebtoken");
const db = require("../models");

exports.signin = async function(req, res, next) {
  try {
    let user = await db.User.findOne({ email: req.body.email });
    let { id, username, profileImageURL } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageURL
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageURL,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid email/password."
      });
    }
  } catch (err) {
    return next({
      status: 400,
      message: "Invalid email/password."
    });
  }
};

exports.signup = async function(req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageURL } = user;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageURL
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageURL,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry that username and/or email has been taken.";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
