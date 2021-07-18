const router = require("express").Router();
const Workout = require("../models/workout.js");

//Get route for workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

//Post route to create workout
router.post("/api/workouts", ({body}, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;