//routes/messages.
const express = require("express"),
  {
    createMessages,
    getMessage,
    deleteMessage
  } = require("../handlers/messages"),
  router = express.Router({ mergeParams: true });

//prefix /api/users/:userId/messages
router.route("/").post(createMessages);

router
  .route("/:message_id")
  .get(getMessage)
  .delete(deleteMessage);

module.exports = router;
