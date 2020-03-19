var express = require('express');
var router = express.Router();
var sql = require('../sql');
var Order = require('../sql/col/orders');
var Address = require('../sql/col/address');
var utils = require('../utils');
var uuid = require('node-uuid');

/**
 * @api {get} /api/address 地址列表
 * @apiDescription 地址列表
 * @apiName /api/address
 * @apiGroup address
 * @apiParam {string} token token
 * @apiParam {string} userid 用户id
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *   res.send({
          code: '10017',
          message: '暂未添加地址'
        })
    res.send({
      code: '10119',
      message: '无效的token'
    })

    res.send({
          code: '200',
          message: '地址列表',
          data
        })
 * @apiSampleRequest  /api/address
 * @apiVersion 1.0.0
 */
router.get('/', function(req, res, next) {
  utils.validateToken(req, res, next).then(() => {
    let { userid } = req.query
    sql.find(Address, { userid }, {_id:0}).then(data => {
      if (data.length === 0) {
        res.send({
          code: '10017',
          message: '暂未添加地址'
        })
      } else {
        res.send({
          code: '200',
          message: '地址列表',
          data
        })
      }
      
    })
  }).catch(() => {
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
});

/**
 * @api {post} /api/address/add 添加地址
 * @apiDescription 添加地址
 * @apiName /api/address/add
 * @apiGroup address
 * @apiParam {string} token token
 * @apiParam {string} username 收件人
 * @apiParam {string} tel 收件人电话
 * @apiParam {string} address 收件人地址
 * @apiParam {string} userid userid
 * @apiParam {string} flag 是否是默认地址 （1 是 0 不是）
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
            code: '10016',
            message: '添加地址成功'
          })
    res.send({
      code: '10119',
      message: '无效的token'
    })
 * @apiSampleRequest  /api/address/add
 * @apiVersion 1.0.0
 */
router.post('/add', function(req, res, next) {
  utils.validateToken(req, res, next).then(() => {
    let { username, tel, address, userid, flag } = req.body
    flag = flag * 1 || 0
    let insertData = {
      addressid: 'address_' + uuid.v1(),
      username,
      tel,
      address,
      userid,
      flag
    }
    // 如果当前地址是要设置为默认地址，你得把其他的地址改为非默认地址，然后插入当前的地址
    // 如果不是默认地址，直接插入即可
    if (flag === 1) {
      sql.update(Address, { userid }, { $set: { flag: 0} }, 1).then(() => {
        sql.insert(Address, insertData).then(() => {
          res.send({
            code: '10016',
            message: '添加地址成功'
          })
        })
      })
    } else {
      sql.insert(Address, insertData).then(() => {
        res.send({
          code: '10016',
          message: '添加地址成功'
        })
      })
    }
  }).catch(() => {
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
});

/**
 * @api {get} /api/address/detail 地址详情
 * @apiDescription 地址详情
 * @apiName /api/address/detail
 * @apiGroup address
 * @apiParam {string} token token
 * @apiParam {string} addressid 地址id
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
        code: '200',
        message: '地址详情',
        data: data[0]
      })
    res.send({
      code: '10119',
      message: '无效的token'
    })
 * @apiSampleRequest  /api/address/detail
 * @apiVersion 1.0.0
 */
router.get('/detail', (req, res, next) => {
  utils.validateToken(req, res, next).then(() => {
    let { addressid } = req.query
    sql.find(Address, { addressid }, { _id: 0 }).then(data => {
      res.send({
        code: '200',
        message: '地址详情',
        data: data[0]
      })
    })
  }).catch(() => {
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
})


/**
 * @api {post} /api/address/update 修改地址
 * @apiDescription 修改地址
 * @apiName /api/address/update
 * @apiGroup address
 * @apiParam {string} token token
 * @apiParam {string} username 收件人
 * @apiParam {string} tel 收件人电话
 * @apiParam {string} address 收件人地址
 * @apiParam {string} userid 用户id
 * @apiParam {string} flag 是否是默认地址 （1 是 0 不是）
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
            code: '10018',
            message: '修改地址成功'
          })
    res.send({
      code: '10119',
      message: '无效的token'
    })
 * @apiSampleRequest  /api/address/update
 * @apiVersion 1.0.0
 */
router.post('/update', function(req, res, next) {
  utils.validateToken(req, res, next).then(() => {
    let { username, tel, address, addressid, userid, flag } = req.body
    flag = flag * 1 || 0
    let updateObj = {
      $set: {
        username,
        tel,
        address,
        flag
      }
    }
    // 如果当前地址是要设置为默认地址，你得把其他的地址改为非默认地址，然后修改当前的地址
    // 如果不是默认地址，直接更新即可
    if (flag === 1) {
      sql.update(Address, { userid }, { $set: { flag: 0} }, 1).then(() => {
        sql.update(Address, { addressid }, updateObj).then(() => {
          res.send({
            code: '10018',
            message: '修改地址成功'
          })
        })
      })
    } else {
      sql.update(Address, { addressid }, updateObj).then(() => {
        res.send({
          code: '10018',
          message: '修改地址成功'
        })
      })
    }
  }).catch(() => {
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
});
module.exports = router;
