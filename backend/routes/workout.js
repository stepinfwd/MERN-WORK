const express = require("express");
const router = express.Router();
const workoutModel = require("../models/workoutModel");

router.get("/", (req, res) => {
  console.log("get all workouts");
  res.send("About this wiki");
});
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await workoutModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.get("/:id", (req, res) => {
  console.log("get particular workout");
  res.json({ msg: "get particular workout" });
});
router.delete("/:id", (req, res) => {
  console.log("delete all workouts");
  res.json({ msg: "delete workout" });
});
router.put("/:id", (req, res) => {
  console.log("edit workouts");
});

module.exports = router;
