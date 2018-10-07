//models/Message.
const mongoose = require("mongoose"),
  User = require("./User");

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 160
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

MessageSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.user);
    user.messages.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("Message", MessageSchema);
