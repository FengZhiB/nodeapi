const mongoose = require('../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  addressid: { type: String },
  userid: { type: String },
  username: { type: String },
  tel: { type: String },
  address: { type: String },
  time: { type: Number },
  flag: { type: Number } // 1表示默认地址 0 表示一般地址
})

module.exports = mongoose.model('Address', schema)