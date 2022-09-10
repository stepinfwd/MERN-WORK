const express = require("express");
const router = express.Router();
const workoutModel = require("../models/workoutModel");
const  {createWorkout,updateWorkout,getAllWorkout,deleteWorkout,getWorkout} =require('../controllers/workoutConttroller')

router.get("/",getAllWorkout );
router.post("/",createWorkout);
router.get("/:id",getWorkout);
router.delete("/:id",deleteWorkout);
router.put("/:id",updateWorkout );

module.exports = router;
