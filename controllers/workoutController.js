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

// router.post('/', (req, res) => {
//     db.Workout.create({})
//     .then(data => {
//         res.json(data);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500);
//     })
// });

module.exports = router;