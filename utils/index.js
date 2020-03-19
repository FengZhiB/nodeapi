const Core = require('@alicloud/pop-core');
var jwt = require('jsonwebtoken');
module.exports = {
  sendCode (PhoneNumbers, code) {
    var client = new Core({
      accessKeyId: 'LTAIZQoVVoPuBjU9',
      accessKeySecret: 'GfJuI2dLsCQh7Q56TmFxPTniXjkVnB',
      endpoint: 'https://dysmsapi.aliyuncs.com',
      apiVersion: '2017-05-25'
    });
    
    var params = {
      "RegionId": "cn-hangzhou",
      "PhoneNumbers": PhoneNumbers,
      "SignName": "吴勋勋",
      "TemplateCode": "SMS_111785721",
      "TemplateParam": "{code: "+ code +"}"
    }
    
    var requestOption = {
      method: 'POST'
    };
    
    return new Promise((resolve, reject) => {
      client.request('SendSms', params, requestOption).then((result) => {
        console.log(JSON.stringify(result));
        resolve()
      }, (ex) => {
        console.log(ex);
        reject()
      })
    })
  },
  validateToken (req, res, next) {
    // 不同形式获取token值
    let token = req.headers.token || req.query.token || req.body.token;
    console.log('token------', token)
    return new Promise((resolve, reject) => {
      if (token) {
        jwt.verify(token, 'daxunxun', function(err, decoded) {
          if (err) {
            reject()
          } else {
            req.decoded = decoded;  
            console.log('验证成功', decoded);
            resolve()
          }
        }) 
      } else { // 不存在 - 告诉用户---意味着未登录
        reject()
      }
    })
  }
}