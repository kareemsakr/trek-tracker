const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("help");
});

module.exports = router;
