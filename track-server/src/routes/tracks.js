const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");
const Track = mongoose.model("Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });
  return res.send(tracks);
});

router.post("/tracks", async (req, res) => {
  try {
    const { name, locations } = req.body;
    if (!name || !locations) {
      return res
        .status(422)
        .send({ error: "Please provide a name and a list of locations" });
    }

    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    return res.send(track);
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
});

module.exports = router;
