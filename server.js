const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const morgan = require('morgan');

const mongoose = require('mongoose');

const apiRouter = require('./routes/api_v1');

const app = express();

mongoose.connect('mongodb://localhost/meandb' , {
    useMongoClient: true
});

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/' , apiRouter);

// Static files
app.use(express.static(path.join(__dirname, '/public/dist/users-app')));

app.listen(3000, () => {
    console.log('Server on port 3000');
})