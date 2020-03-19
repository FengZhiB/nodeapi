const mongoose = require('../db');
const Schema = mongoose.Schema;

const schema = new Schema({
  orderid: { type: String },
  userid: { type: String },
  username: { type: String },
  tel: { type: String },
  address: { type: String },
  list: { type: Array },
  pay: { type: String }, // wx  alipay
  note: {type: String },
  status: { type: Number } // 0 未支付 1 待收货 2 待评价 3 已完成
})

module.exports = mongoose.model('Order', schema)