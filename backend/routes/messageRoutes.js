const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controller/messageController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;
