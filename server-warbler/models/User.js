const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profileImageURL: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ]
});

UserSchema.pre("save", async function(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function(candiatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candiatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

module.exports = mongoose.model("User", UserSchema);
