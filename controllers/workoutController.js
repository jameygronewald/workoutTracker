const express = require("express");
const fs = require('fs');
const router = express.Router();
const db = require('../models');

router.get('/api/workouts', (req, res) => {
    db.Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    console.log(req.body);
    db.Workout.findOneAndUpdate(
        {
            _id: req.params.id
        },
        {
            $push: {
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            }
        },
        {
            new: true
        }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500);
    })
});

module.exports = router;