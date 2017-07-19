
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/database_1');


app.use('/api', require('./routes/index.js'));

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});