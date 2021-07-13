const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let skiTerms = require('./skiTerms.json');

const app = express();

const save = () => {
  // stringify with 2 will make identation of 2 spaces
  fs.writeFile('./skiTerms.json', JSON.stringify(skiTerms, null, 2), (error) => {
    if (error) {
      throw error;
    }
  });
};

// here we build a middleware to parse the body
app.use(bodyParser.json());

// here we build a middleware to log
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  if (Object.keys(req.body).length) {
    console.log(req.body);
  }
  next();
});

// this is already a middleware to serve the static files
app.use(express.static('./client'));

app.get('/dictionary', (req, res) => {
  res.json(skiTerms);
});

app.post('/dictionary', (req, res) => {
  skiTerms.push(req.body);
  save();
  res.json({
    status: 'success',
    term: req.body,
  });
});

app.delete('/dictionary/:term', (req, res) => {
  skiTerms = skiTerms.filter((def) => def.term !== req.params.term);
  save();
  res.json({
    status: 'success',
    removed: req.params.term,
    newLength: skiTerms.length,
  });
});

app.listen(3000, () => {
  console.log(`Ski Dictionary at http://localhost:3000`);
});
