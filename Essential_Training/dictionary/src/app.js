const express = require('express');
const bodyParser = require('body-parser');
const { logger } = require('./lib');
const dictionaryRoutes = require('./dictionary-routes');

const app = express();

// here we build a middleware to parse the body
app.use(bodyParser.json());

// here we build a middleware to log
app.use(logger);

// this is already a middleware to serve the static files
app.use(express.static('./client'));

app.use('/dictionary', dictionaryRoutes);

module.exports = app;
