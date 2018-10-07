//handlers/messages.
const db = require("../models");

exports.createMessages = async function(req, res, next) {
  try {
    const { text } = req.body;
    const { userId } = req.params;
    let message = await db.Message.create({
      text,
      user: userId
    });
    let foundUser = await db.User.findById(userId);
    foundUser.messages.push(message.id);
    await foundUser.save();
    let foundMessage = await db.Message.findById(message.id).populate("user", {
      username: true,
      profileImageURL: true
    });
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.getMessage = async function(req, res, next) {
  try {
    let message = await db.Message.findById(req.params.message_id);
    return res.status(200).json(message);
  } catch (err) {
    return next(err);
  }
};

exports.deleteMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};
