const mongoose = require('../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  userid: { type: String },
  username: { type: String },
  password: { type: String },
  birthday: { type: String },
  sex: { type: Number },
  tel: { type: String },
  email: { type: String }
})

module.exports = mongoose.model('User', schema)