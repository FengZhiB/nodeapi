const mongoose = require('../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  bannerid: { type: String },
  img: { type: String },
  alt: { type: String },
  href: { type: String }
})

module.exports = mongoose.model('Banner', schema)