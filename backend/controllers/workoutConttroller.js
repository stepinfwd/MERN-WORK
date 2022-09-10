const workoutModel = require('../models/workoutModel');
const mongoose = require('mongoose')

// get all workout
const getAllWorkout = async (req, res) => {
    try {
        const workouts = await workoutModel.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// create a  workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await workoutModel.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// get a  workout

const getWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId(id))
    return res.status(400).json({error:'no such workout'})
    const workout = await workoutModel.findById(id)
    if (!workout)
        return res.status(404).send({ error: 'no such workout' })

    return res.status(200).send(workout)
}

// delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId(id))
    return res.status(400).json({error:'no such workout'})
    const workout = await workoutModel.findOneAndDelete({ _id: id })
    if (!workout)
        return res.status(400).send({ error: 'no such workout' })

    res.status(200).json(workout)
}


// update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId(id))
    return res.status(400).json({error:'no such workout'})
    const workout =await workoutModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout)
        return res.status(400).send({ error: 'no such workout' })

    res.status(200).json(workout)
}

module.exports = {
    createWorkout, updateWorkout, getAllWorkout, deleteWorkout, getWorkout
}