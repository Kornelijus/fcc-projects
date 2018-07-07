'use strict';

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  }
});

userSchema.plugin(uniqueValidator);
var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
