const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_DB || "mongodb://localhost:27017/warbler", {
  keepAlive: true,
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);

module.exports.User = require("./User");
module.exports.Message = require("./Message");
