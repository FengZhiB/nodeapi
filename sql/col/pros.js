const mongoose = require('./../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  proid: { type: String },
  type: { type: String },
  brand: { type: String },
  brandimg: { type: String },
  proname: { type: String },
  proimg: { type: String },
  price: { type: Number },
  stock: { type: Number },
  sales: { type: Number },
  rating: { type: Number },
  flag: { type: Number },
  note: { type: String },
  detail: { type: String }
})

module.exports = mongoose.model('Pro', schema)