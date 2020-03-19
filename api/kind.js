var express = require('express');
var router = express.Router();
var sql = require('../sql');
var Pro = require('../sql/col/pros');
var utils = require('../utils');
var uuid = require('node-uuid');

/**
 * @api {get} /api/kind/category 获取大分类
 * @apiDescription 获取大分类
 * @apiName /api/kind/category
 * @apiGroup kind
 * @apiParam {string} type 商品的分类
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
      code: '200',
      message: '分类列表',
      data: data
    })
 * @apiSampleRequest /api/kind/category
 * @apiVersion 1.0.0
 */
router.get('/category', (req, res, next) => {
  let { type } = req.query;
  sql.distinct(Pro, type).then(data => {
    res.send({
      code: '200',
      message: '分类列表',
      data: data
    })
  })
})
/**
 * @api {get} /api/kind/categorybrand 获取大分类下的品牌
 * @apiDescription 获取大分类下的品牌
 * @apiName /api/kind/categorybrand
 * @apiGroup kind
 * @apiParam {string} type 商品的分类
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
      code: '200',
      message: '分类列表',
      data: data
    })
 * @apiSampleRequest /api/kind/categorybrand
 * @apiVersion 1.0.0
 */
router.get('/categorybrand', (req, res, next) => {
  let { type } = req.query;
  sql.find(Pro, {type}, {_id:0, brand: 1}).then(data => {
    // [{brand: 'appale'}, {brand: 'huawei'},{brand: 'huawei'},{brand: 'appale'}]
    // res.send(data)
    // 利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
    var obj = {};
    let arr = data.reduce((item, next) => {
      obj[next.brand] ? '' : obj[next.brand] = true && item.push(next);
      return item;
    }, [])
    res.send({
      code: '200',
      message: '获取大分类下的品牌',
      data: arr
    })
  })
})

/**
 * @api {get} /api/kind/categorylist 获取大分类下的品牌下的数据
 * @apiDescription 获取大分类下的品牌下的数据
 * @apiName /api/kind/categorylist
 * @apiGroup kind
 * @apiParam {string} type 商品的分类
 * @apiParam {string} brand 品牌
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  res.send({
      code: '200',
      message: '分类列表',
      data: data
    })
 * @apiSampleRequest /api/kind/categorylist
 * @apiVersion 1.0.0
 */
router.get('/categorylist', (req, res, next) => {
  let { type, brand } = req.query;
  sql.find(Pro, {type, brand}, {_id:0}).then(data => {
    res.send({
      code: '200',
      message: '获取大分类下的品牌下的数据',
      data: data
    })
  })
})
module.exports = router;
