const mongoose = require('mongoose');

const googleSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  userclothesHeads: [],
  userclothesLegs: [],
  userclothesBodys: [],
  userclothesFeets: [],
  looks: [],
});

module.exports = mongoose.model('UserGoogle', googleSchema);
