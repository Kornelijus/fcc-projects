'use strict';

var express = require('express');
var cors = require('cors');

// Using multer to handle file uploading
var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage()});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

// File Metadata Microservice
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res){
  res.json({
    name: req.file.originalname,
    size: req.file.size
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
