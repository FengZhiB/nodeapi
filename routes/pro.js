var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var Pro = require('./../sql/col/pros');
// var sql = require('./../sql/index')
var sql = require('./../sql')
const xlsx = require('node-xlsx');

/* GET users listing. */
// 查看数据
router.get('/', function(req, res, next) {
  // 1、查询数据库中产品的数据
  sql.find(Pro, {}, { _id: 0 }).then(data => {
    // 2、渲染页面，传递参数
    res.render('pro', { 
      activeIndex: 3,
      data
    })
  })
});

// 跳转到添加产品页面
router.get('/add', function(req, res, next) {
  res.render('pro_add', { activeIndex: 3 })
});

// 提交添加产品
router.post('/addAction', (req, res, next) => {
  // 1.获取前端提交的数据 --- 对象obj
  let obj = req.body
  // 2.给对象obj添加字段 proid --- 产品id
  obj.proid = 'pro_' + uuid.v1(); // uuid.v1();生成唯一码
  // 3、纠正数据的数据类型
  obj.price *= 1; // 价格
  obj.stock *= 1; // 库存
  obj.sales *= 1; // 销量
  obj.rating *= 1; // 评分
  obj.flag *= 1; // 推荐
  // res.send(obj)
  // 4、插入数据库
  sql.insert(Pro, obj).then(() => {
    // 5、跳转回列表页面 --- 重定向
    res.redirect('/pro');
  })
})

// 删除产品
router.get('/delete', (req, res, next) => {
  //1、获取删除的产品的标识  ---- proid
  let proid = req.query.proid
  // 2、删除数据
  sql.delete(Pro, { proid }).then(() => {
    // 3/重定向看列表
    res.redirect('/pro')
  })
})


// 跳转到更新产品页面
router.get('/update', function(req, res, next) {
  // 1、获取更新的依据  proid
  let { proid } = req.query;
  // 2、查询数据库
  sql.find(Pro, { proid }, { _id: 0 }).then(data => {
    // 3、给页面传递数据
    res.render('pro_update', { 
      activeIndex: 3,
      proid: proid,
      proname: data[0].proname,
      type: data[0].type,
      brand: data[0].brand,
      brandimg: data[0].brandimg,
      proimg: data[0].proimg,
      price: data[0].price,
      stock: data[0].stock,
      sales: data[0].sales,
      rating: data[0].rating,
      flag: data[0].flag,
      note: data[0].note,
      detail: data[0].detail
    })
  })
});

// 提交更新产品
router.post('/updateAction', (req, res, next) => {
  // 1.获取前端提交的数据 --- 对象obj
  let obj = req.body
  // 2、纠正数据的数据类型
  obj.price *= 1; // 价格
  obj.stock *= 1; // 库存
  obj.sales *= 1; // 销量
  obj.rating *= 1; // 评分
  obj.flag *= 1; // 推荐
  // res.send(obj)
  // 3、获取更新的依据
  let proid = obj.proid;
  // 4、更新数据库
  sql.update(Pro, { proid }, { $set: obj}).then(() => {
    // 5、跳转回列表页面 --- 重定向
    res.redirect('/pro');
  })
})

// 导入数据
router.get('/upload', (req, res, next) => {
  // 1、确定数据表格的路径  ---   电脑的绝对路径
  let fileStr = 'E:/course-wxx/sh1910/week1-node/day05/myapp/shop.xlsx';
  // 2、解析这个文件
  let fileData = xlsx.parse(fileStr)
  // res.send(fileData)
  /**
   * [{name: '', data: []}, {name: '', data: []}, {name: '', data: []}]
   */
  // 3、获取需要的产品数据
  let proarr = fileData[0].data
  // res.send(proarr)
  /**
   * [[表头信息], [数据信息], [数据信息], [数据信息]]
   * ["类型","品牌","品牌图标","名称","评分","销量","库存","价格","是否推荐","图片地址","简介","详情"]
   */
  // 4、遍历数据，组合数据
  let arr = []
  proarr.map((item, index) => {
    if (index > 0) { // 过滤表头
      // 组合数据
      arr.push({
        proid: 'pro_' + uuid.v1(),
        type: item[0],
        brand: item[1],
        brandimg: item[2],
        proname: item[3],
        rating: item[4] * 1,
        sales: item[5] * 1,
        stock: item[6] * 1,
        price: item[7] * 1,
        flag: item[8] * 1,
        proimg: item[9],
        note: item[10],
        detail: item[11]
      })
    }
  })
  // res.send(arr)
  // 5、插入数据库
  sql.insert(Pro, arr).then(() => {
    // 6、重定向
    res.redirect('/pro')
  })
})

// 排序路由 /pro/sort?type=price&flag=1  /pro/sort?type=price&flag=-1
router.get('/sort', (req, res, next) => {
  // 1、接收排序的字段以及排序的规则
  let { type, flag } = req.query
  flag *= 1;
  // 2、调用数据库 {[type]: flag} ==> { price: 1} / { sales: 1}
  sql.sort(Pro, {}, {_id: 0}, {[type]: flag}).then(data => {
    // 3、渲染页面，传递参数
    res.render('pro', { 
      activeIndex: 3,
      data
    })
  })
})
module.exports = router;
