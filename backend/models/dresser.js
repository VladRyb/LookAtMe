const { Schema, model } = require('mongoose');

const dresserSchema = new Schema({
  headImages: [],
  bodyImages: [],
  pansImages: [],
  lapkiImages: [],
});

module.exports = model('Dresser', dresserSchema);
