var express = require('express');
var router = express.Router();
var User = require('./../sql/col/users');
var sql = require('./../sql');
var bcrypt = require('bcryptjs');
var uuid = require('node-uuid');
var utils = require('./../utils')
var jwt = require('jsonwebtoken');
/**
 * @api {post} /api/users/register 注册接口
 * @apiDescription 注册接口
 * @apiName /api/users/register
 * @apiGroup users
 * @apiParam {string} username 用户名
 * @apiParam {string} tel 联系方式
 * @apiParam {string} password 密码
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 注册成功
 * {
 *    code: '10002',
 *    message: '注册成功'
 *  }
 *  // 注册失败
 * {
 *    code: '10003',
 *    message: '注册失败'
 *  }
 *  // 用户已注册
 * {
 *    code: '10001',
 *    message: '用户已注册'
 *  }
 * @apiSampleRequest /api/users/register
 * @apiVersion 1.0.0
 */
router.post('/register', (req, res, next) => {
  // 1、获取用户名、联系方式、密码
  let { username, password, tel } = req.body; // 解构赋值
  // 2、以手机号评判有没有该用户，没有提示可注册，有了提示已注册 ---- 查询用户表
  sql.find(User, { tel }, { _id: 0 }).then(data => {
    // 3、查询的结果为数组，如果没有数据为空数组 ---- 判断
    if (data.length === 0) {
      // 3.1没有数据 ---- 可以继续注册
      // res.send('可以注册')
      // 4、密码加密
      // 4.1 设置加密强度
      var salt = bcrypt.genSaltSync(10);
      // 4.2 密码加密
      password = bcrypt.hashSync(password, salt);
      // res.send(password)
      // 5、整合需要插入的数据
      let insertData = {
        userid: 'user_' + uuid.v1(),
        username,
        tel,
        password,
        birthday: '',
        sex: -1,
        email: ''
      }
      // 6、插入数据库，返回相关字段
      sql.insert(User, insertData).then(() => {
        res.send({
          code: '10002',
          message: '注册成功'
        })
      }).catch(() => {
        res.send({
          code: '10003',
          message: '注册失败'
        })
      })
    } else {
      // 3.2 该用户已存在
      res.send({
        code: '10001',
        message: '该用户已存在'
      })
    }
  })
})

// 发送短信验证码
/**
 * @api {get} /api/users/sendCode 发送短信验证码
 * @apiDescription 发送短信验证码
 * @apiName /api/users/sendCode
 * @apiGroup users
 * @apiParam {string} tel 联系方式
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 发送成功
 * {
 *    code: '10004',
 *    message: '发送验证码成功'
 *    data: code
 *  }
 *  // 发送失败
 * {
 *    code: '10005',
 *    message: '发送验证码失败'
 *  }
 *  // 用户已注册
 * {
 *    code: '10001',
 *    message: '用户已注册'
 *  }
 * @apiSampleRequest /api/users/sendCode
 * @apiVersion 1.0.0
 */
router.get('/sendCode', (req, res, next) => {
  // 1、获取手机号
  let { tel } = req.query;
  // 2、判断有没有该用户
  sql.find(User, { tel }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      // 2.1 没有该用户，可以发送
      // 3、生成随机验证码
      let code = Math.floor(Math.random() * 90000 + 10000) // 10000-99999
      // 4、发送验证码
      utils.sendCode(tel, code).then(() => {
        // 4.1 发送成功
        res.send({
          code: '10004',
          message: '发送验证码成功',
          data: code
        })
      }).catch(() => {
        // 4.2 发送失败
        res.send({
          code: '10005',
          message: '发送验证码失败'
        })
      })
    } else {
      // 2.2 该用户已存在
      res.send({
        code: '10001',
        message: '该用户已存在'
      })
    }
  })
})


// 登陆接口
/**
 * @api {post} /api/users/login 登陆接口
 * @apiDescription 登陆接口
 * @apiName /api/users/login
 * @apiGroup users
 * @apiParam {string} tel 联系方式
 * @apiParam {string} password 密码
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 登陆成功
 * {
 *    code: '10008',
 *    message: '登陆成功',
 *    "data": {
        "userid": "user_73e91fc0-157b-11ea-9536-db1ce873a934",
        "username": "wudaxun",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODgxMzAwNzgxNCIsImlhdCI6MTU3NjIyMDM2NiwiZXhwIjoxNTc2ODI1MTY2fQ.AbkxGcEbD4zD_UaP3Y_dty38E8ZKEuAyjo9IKsJRFEI"
    }
 *  }
 *  // 密码错误
 * {
 *    code: '10007',
 *    message: '密码错误'
 *  }
 *  // 用户未注册
 * {
 *    code: '10006',
 *    message: '用户未注册'
 *  }
 * @apiSampleRequest /api/users/login
 * @apiVersion 1.0.0
 */
router.post('/login', (req, res, next) => {
  // 1、获取手机号和密码
  let { tel, password } = req.body;
  // 2、验证手机号
  sql.find(User, { tel }, { _id: 0 }).then(data => {
    if (data.length === 0) {
      // 2.1 没有注册，没有该用户
      res.send({
        code: '10006',
        message: '该用户未注册'
      })
    } else {
      // 2.2 有该用户，验证密码的正确性
      // 3、验证密码  bcrypt.compareSync('123456', hash) hash就是数据库中的密码
      // 3.1 获取数据库中的密码
      let pwd = data[0].password; // data = [{}]
      // 3.2 对比取结果
      let flag = bcrypt.compareSync(password, pwd);
      // 4、设置业务逻辑
      if (flag) {
        // 4.1 登陆成功,返回用户信息,生成token值
        let token = jwt.sign({ tel }, 'daxunxun', {
          expiresIn: 60*60*24*7// 授权时效7天
        })
        res.send({
          code: '10008',
          message: '登陆成功',
          data: {
            userid: data[0].userid,
            username: data[0].username,
            token
          }
        })
      } else {
        // 4.2 密码错误
        res.send({
          code: '10007',
          message: '密码错误'
        })
      }
    }
  })
})

// 修改个人中心资料
/**
 * @api {post} /api/users/update 修改个人中心
 * @apiDescription 修改个人中心
 * @apiName /api/users/update
 * @apiGroup users
 * @apiParam {string} userid 用户id
 * @apiParam {string} tel 联系方式
 * @apiParam {string} username 用户名
 * @apiParam {number} sex 性别 （1 表示男  0 表示女）
 * @apiParam {string} email 邮箱
 * @apiParam {string} birthday 生日
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 修改个人信息成功
 * {
 *    code: '10009',
 *    message: '修改个人信息成功'
 *  }
 *  // 修改个人信息失败
 * {
 *    code: '10010',
 *    message: '修改个人信息失败'
 *  }
 * @apiSampleRequest /api/users/update
 * @apiVersion 1.0.0
 */
router.post('/update', (req, res, next) => {
  // 1、获取相关字段,userid为修改的条件，其余的为修改的值
  let { userid, username, tel, sex, birthday, email } = req.body;
  // 2、依据userid 获取数据库中的数据，如果用户没有传递，则不修改
  sql.find(User, { userid }, { _id: 0 }).then(data => {
    // 2.1 获取原先的数据，如果传递的有值，用传递的值，没有则用数据库中值 --- 默认值为数据库中的值
    username = username || data[0].username;
    tel = tel || data[0].tel;
    sex = sex * 1 || data[0].sex * 1;
    birthday = birthday || data[0].birthday;
    email = email || data[0].email;
    // 3、修改数据
    sql.update(User, { userid }, { $set: { username, tel, sex, birthday, email }}).then(() => {
      // 3.1修改成功
      res.send({
        code: '10009',
        message: '修改个人信息成功'
      })
    }).catch(() => {
      // 3.2修改失败
      res.send({
        code: '10010',
        message: '修改个人信息失败'
      })
    })
  })
})


// 获取用户信息
/**
 * @api {get} /api/users/getInfo 获取用户信息
 * @apiDescription 获取用户信息
 * @apiName /api/users/getInfo
 * @apiGroup users
 * @apiParam {string} userid 用户id
 * @apiParam {string} token token
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 * // 未登录
 * res.send({ 
    code: '10119', 
    message: '没有找到token.' 
  });
 * 
 * res.send({
      code: '200',
      message: '获取用户的信息',
      data: {
        username, tel, sex, birthday, email, userid
      }
    })
 * @apiSampleRequest /api/users/getInfo
 * @apiVersion 1.0.0
 */
router.get('/getInfo', (req, res, next) => {
  // 验证token
  utils.validateToken(req, res, next).then(() => {
    // 1，获取参数 userid --- 获取信息的依据
    let { userid } = req.query;
    // 2、查询数据库
    sql.find(User, { userid }, { _id: 0 }).then(data => {
      // 3、设定需要返回数据
      let { username, tel, sex, birthday, email, userid } = data[0]
      // 4、发送数据
      res.send({
        code: '200',
        message: '获取用户的信息',
        data: {
          username, tel, sex, birthday, email, userid
        }
      })
    })
  }).catch(() => {
    res.send({ 
      code: '10119', 
      message: '没有找到token.' 
    });
  })
})
module.exports = router;