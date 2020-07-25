const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Workout = require('./models/Workout')

const PORT = process.env.PORT || 3000;

const viewsController = require('./controllers/viewsController.js')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// Routes
app.use(viewsController);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutTracker', { useNewUrlParser: true, useUnifiedTopology:true });
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongoose successfully connected.');
});
connection.on('connected', (err) => {
    console.log('Mongoose connection error: ', err);
});

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
});