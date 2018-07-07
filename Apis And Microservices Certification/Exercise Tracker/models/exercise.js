'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  userId: {
    type: String,
    ref: 'User',
    index: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    min: 1,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

var exerciseModel = mongoose.model('Exercise', exerciseSchema);

module.exports = exerciseModel;
