// Create web server

// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Import the comments module
const comments = require('./comments');

// Import the body-parser module
const bodyParser = require('body-parser');

// Configure body-parser settings
// to allow us to read JSON data
app.use(bodyParser.json());

// Configure the app to serve static files from the public folder
app.use(express.static('public'));

// Configure the app to use the comments module
app.use('/api/comments', comments);

// Start the server
app.listen(3000, () => console.log('Server listening on port 3000!'));
