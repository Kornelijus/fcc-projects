'use strict';

var express = require('express');
const bodyParser = require('body-parser');
var mongo = require('mongodb');

var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/url-shortener');

const URLShortener = require('./routes/url-shortener');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// URL Shortener
app.use('/api/shorturl/', URLShortener);

app.listen(port, function() {
  console.log('Node.js listening ...');
});
