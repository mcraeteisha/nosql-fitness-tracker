const router = require("express").Router();
const Workout = require("../models/workout.js");

//Get last workout
router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });

//Add exercise  
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(dbWorkout => {
          res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
  });

//Create workout
router.post("/api/workouts", ({body}, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

//Get workouts in range
router.get("/api/workouts/range", ({body}, res) => {
    Workout.find({}).limit(7).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  });


module.exports = router;