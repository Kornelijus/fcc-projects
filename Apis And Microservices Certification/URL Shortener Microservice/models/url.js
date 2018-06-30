'use strict';

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;

var connection = mongoose.createConnection(
  process.env.MLAB_URI || 'mongodb://localhost/url-shortener'
);
autoIncrement.initialize(connection);

var URLSchema = new Schema({
  url: {
    type: String,
    required: true
  }
});

URLSchema.plugin(autoIncrement.plugin, { model: 'URL', field: 'short_url' });
var URLModel = mongoose.model('URL', URLSchema);

module.exports = URLModel;
