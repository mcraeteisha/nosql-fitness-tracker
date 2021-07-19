const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercise: [
    {
        type: String,
    },
    {
        name: String,
    },
    {
        distance: Number,
    },
    {
        duration: Number,
    },
    {
        weight: Number,
        sets: Number,
        reps: Number,
        resistanceDuration: Number,
    },
    ]  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
