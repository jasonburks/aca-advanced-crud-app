const path = require('path'); // dependencies from node
const express = require('express');// dependencies from npm (package.json)
const methodOveride = require('method-override');// dependencies from npm (package.json)
const bodyParser = require('body-parser'); // dependencies from npm (package.json)
const names = require('./routes/posts'); // dependencies from local (/routes)

// Require Routes
const posts = require('./routes/posts');

// Set up database
const mongoose = require('mongoose');
// TODO: You need to write the line to connect to the mongo database
mongoose.connect('mongodb://localhost/crud-posts');

// Create our instance of our app
const app = express();

// Add middleware
app.use(methodOveride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// TODO: Add a comment here explaining, briefly, what bodyParser is doing to our request
// bodyParser - is a middleware that parses the data passed from the forms and stores the results in req.body.

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set our directory for serving static files
app.use(express.static('public'));

// Registering a simple route to redirect to '/posts'
app.get('/', (req, res, next) => {
  res.redirect('/posts');
});

// Register our routes
// TODO: Register our `posts` routes name-spaced under '/posts'
app.use('/posts', posts);


const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
