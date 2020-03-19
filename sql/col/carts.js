const mongoose = require('../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  cartid: { type: String },
  proid: { type: String },
  userid: { type: String },
  num: { type: Number },
})

module.exports = mongoose.model('Cart', schema)