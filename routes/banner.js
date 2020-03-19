var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var Banner = require('../sql/col/banner');
var sql = require('../sql');
var uuid = require('node-uuid');
var fs = require('fs')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('banner', { activeIndex: 4 })
});

router.get('/add', function(req, res, next) {
  res.render('banner_add', { activeIndex: 4 })
});

router.post('/addAction', upload.single('img'), function(req, res, next) {
  // res.send({
  //   data: req.body,
  //   file: req.file
  // })
  // 1、获取文件信息
  let fileObj  = req.file
  // 2、获取源文件的，名称，提取后缀名
  let originalname = fileObj.originalname;
  // 以 . 分割名称，获取到后缀名
  let originalnamearr = originalname.split('.')
  let type = originalnamearr[originalnamearr.length - 1]

  // 3、使用文件系统的写入模块 fs.rename(old, new, () => {})
  fs.rename('uploads/' + fileObj.filename, 'uploads/' + fileObj.filename + '.' + type, (err) => {
    if (err) throw err
    // res.send({
    //   data: req.body,
    //   img: fileObj.filename + '.' + type
    // })
    let insertObj = {
      bannerid: 'banner_' + uuid.v1(),
      href: req.body.href,
      alt: req.body.alt,
      img: fileObj.filename + '.' + type
    }

    sql.insert(Banner, insertObj).then(() => {
      res.redirect('/banner')
      //  res.send({ code: '10100', message: '上传成功', img: fileObj.filename + '.' + type})
    })
  })
});

module.exports = router;
