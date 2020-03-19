var express = require('express');
var router = express.Router();
var Cart = require('../sql/col/carts');
var Pro = require('../sql/col/pros');
var sql = require('../sql');
var utils = require('./../utils');
var uuid = require('node-uuid');
/**
 * @api {get} /api/cart 获取购物车数据
 * @apiDescription 获取购物车数据
 * @apiName /api/cart
 * @apiGroup cart
 * @apiParam {string} token token
 * @apiParam {string} userid 用户id
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *   res.send({
          code: '10012',
          message: '购物车空空如'
        })
    res.send({
      code: '10119',
      message: '无效的token'
    })

    res.send({
        code: '200',
        message: '购物车的列表数据',
        data
      })
 * @apiSampleRequest /api/cart
 * @apiVersion 1.0.0
 */
router.get('/', (req, res, next) => {
  utils.validateToken(req, res, next).then(() => {
    let { userid } = req.query
    let cartarr = [] // 用来存放第一次依据用户id查询得到的购物车数据
    sql.find(Cart, { userid }, { _id: 0 }).then(data => {
      // 判定当前购物车有没有数据
      if (data.length === 0) {
        res.send({
          code: '10012',
          message: '购物车空空如'
        })
      } else {
        // 不为空，依据请求到的数据，循环遍历，以proid字段查询相关的产品信息，拼接数据
        cartarr = data // 记录购物车数据
        // 查询购物车数据中每一条数据 proid对应的产品信息
        let p1 = data.map(item => {
          return sql.find(Pro, { proid: item.proid }, { _id: 0 })
        })
        // 处理多个异步的操作。结果就是下一步的result
        return Promise.all(p1)
      }
    }).then(result => {
      // console.log(result) // [ [{}], [{}], [{}]]
      let arr = [] // 组合数据
      result.map((item, index) => {
        arr.push({
          proname: item[0].proname,
          proid: item[0].proid,
          price: item[0].price,
          proimg: item[0].proimg,
          num: cartarr[index].num, // cartarr [{}, {},{}]
          cartid: cartarr[index].cartid,
          userid
        })
      })
      res.send({
        code: '200',
        message: '购物车的列表数据',
        data: arr
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
 * @api {post} /api/cart/add 加入购物车
 * @apiDescription 加入购物车
 * @apiName /api/cart/add
 * @apiGroup cart
 * @apiParam {string} token token
 * @apiParam {string} proid 产品id
 * @apiParam {string} userid 用户id
 * @apiParam {number} num 加入购物车的数量
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
          code: '10011',
          message: '加入购物车成功'
        })
    res.send({
      code: '10119',
      message: '无效的token'
    })
 * @apiSampleRequest /api/cart/add
 * @apiVersion 1.0.0
 */
router.post('/add', (req, res, next) => {
  // res.send('加入购物车')
  // 1.校验用户是否已经登陆，登陆成功才可以继续加入购物车
  utils.validateToken(req, res, next).then(() => {
    // 1.1 校验已经登陆
    // 2、获取购物车数据
    let { userid, proid, num } = req.body
    num = num * 1 || 1
    // 3、如果当前用户的购物车中有当前的这个产品，那么更新购物车的数据即可，否则直接加入购物车
    if (!userid || !proid || !num) {
      res.send({
        code: '50000',
        message: '你还想干嘛'
      })
      return 
    }
    sql.find(Cart, { userid, proid }, { _id: 0}).then(data => {
      if (data.length > 0) {
        // 3.1 表示数据存在 ---  更新数据库
        sql.update(Cart, {userid, proid}, { $inc: { num: num }}).then(() => {
          res.send({
            code: '10011',
            message: '加入购物车成功'
          })
        })
      } else {
        // 3.2 数据不存在 --- 插入数据库
        sql.insert(Cart, {
          cartid: 'cart_' + uuid.v1(),
          proid,
          userid,
          num
        }).then(() => {
          res.send({
            code: '10011',
            message: '加入购物车成功'
          })
        })
      }
    })
  }).catch(() => {
    // 1.2 校验未登录或者是登陆过期
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
})


/**
 * @api {get} /api/cart/update 更新购物车
 * @apiDescription 更新购物车
 * @apiName /api/cart/update
 * @apiGroup cart
 * @apiParam {string} token token
 * @apiParam {string} cartid 购物车id
 * @apiParam {number} num 购物车数量
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *   res.send({
          code: '10013',
          message: '更新成功'
        })
    res.send({
      code: '10119',
      message: '无效的token'
    })

    
 * @apiSampleRequest /api/cart/update
 * @apiVersion 1.0.0
 */
router.get('/update', (req, res, next) => {
  utils.validateToken(req, res, next).then(() => {
    let { cartid, num } = req.query;
    num = num * 1
    sql.update(Cart, { cartid }, { $set: { num }}).then(() => {
      res.send({
        code: '10013',
        message: '更新成功'
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
 * @api {get} /api/cart/delete 删除数据
 * @apiDescription 删除数据
 * @apiName /api/cart/delete
 * @apiGroup cart
 * @apiParam {string} token token
 * @apiParam {string} cartid 购物车id
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *   res.send({
          code: '10014',
          message: '删除成功'
        })
    res.send({
      code: '10119',
      message: '无效的token'
    })

    
 * @apiSampleRequest /api/cart/delete
 * @apiVersion 1.0.0
 */
router.get('/delete', (req, res, next) => {
  utils.validateToken(req, res, next).then(() => {
    let { cartid } = req.query
    sql.delete(Cart, { cartid }).then(() => {
      res.send({
        code: '10014',
        message: '删除成功'
      })
    })
  }).catch(() => {
    res.send({
      code: '10119',
      message: '无效的token'
    })
  })
})

module.exports = router;
