const { Schema, model } = require('mongoose');
const { ObjectId } = require('mongoose').Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, 'enter email!'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'wrong email'],
  },
  password: {
    type: String,
    required: [true, 'enter password'],
  },
  userclothesHeads: [],
  userclothesLegs: [],
  userclothesBodys: [],
  userclothesFeets: [],
  looks: [],
});

const User = model('User', userSchema);

module.exports = User;
