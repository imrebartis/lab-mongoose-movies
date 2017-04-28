/*jshint esversion: 6*/

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebschema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celeb = mongoose.model('Celeb', celebschema);

module.exports = Celeb;
