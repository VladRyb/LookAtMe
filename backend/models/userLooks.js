const { Schema, model } = require('mongoose');

const userLooksSchema = new Schema({
  head: String,
  body: String,
  legs: String,
  feet: String,
  photo: String,
  name: {
    type: String,
    required: true,
  },
  tags: [],
});

module.exports = model('UresLooks', userLooksSchema);
