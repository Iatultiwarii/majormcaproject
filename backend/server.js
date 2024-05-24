// Imported required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Database url
const mongoDatabase = 'mongodb://127.0.0.1:27017/students';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect MongoDB Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { 
    console.log('Database is connected'); 
  })
  .catch(err => { 
    console.log('There is a problem while connecting to the database: ' + err); 
  });

// All the express routes
const studentRoutes = require('./Routes/Student.route');

// Convert incoming data to JSON format
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

// Routes Configuration
app.use('/student', studentRoutes);

// Setup for the server port number
const port = process.env.PORT || 4000;

// Starting our express server
const server = app.listen(port, function () {
  console.log('Server is listening on port: ' + port);
});
