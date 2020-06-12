const mongoose = require('mongoose');

const googleSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  googleId: String,
  posts: Array,
});

module.exports = mongoose.model('UserGoogle', googleSchema);
