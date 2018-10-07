//Server index js.
require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  db = require("./models"),
  { loginRequired, ensureCorrectUser } = require("./middleware/auth"),
  errorHandler = require("./handlers/error"),
  authRoutes = require("./routes/auth"),
  messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:userId/messages",
  loginRequired,
  ensureCorrectUser,
  messageRoutes
);

app.get("/api/messages", loginRequired, async function(req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({ createdAt: "desc" })
      .populate("user", {
        username: true,
        profileImageURL: true
      });
    return res.status(200).json(messages);
  } catch (err) {
    return next(err);
  }
});

app.get("/", (req, res) => {
  res.send("backend WARBLER APPLICATION");
});

//error handling
app.use((req, res, next) => {
  let err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
