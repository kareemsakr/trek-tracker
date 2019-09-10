const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    let newUser = new User({
      email: req.body.email,
      password: req.body.password
    });
    await newUser.save();
    const token = "tempToken";
    return res.status(201).json({
      user: newUser,
      token: `JWT ${token}`,
      msg: "User was succesfully created"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
