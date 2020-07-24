const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

const viewsController = require('./controllers/viewsController.js')

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// Routes
app.use(viewsController);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userdb', { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
});