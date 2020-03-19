const Core = require('@alicloud/pop-core');

var client = new Core({
  accessKeyId: 'LTAIZQoVVoPuBjU9',
  accessKeySecret: 'GfJuI2dLsCQh7Q56TmFxPTniXjkVnB',
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
});

var params = {
  "RegionId": "cn-hangzhou",
  "PhoneNumbers": "13946652513",
  "SignName": "吴勋勋",
  "TemplateCode": "SMS_111785721",
  "TemplateParam": "{code: '10010'}"
}

var requestOption = {
  method: 'POST'
};

client.request('SendSms', params, requestOption).then((result) => {
  console.log(JSON.stringify(result));
}, (ex) => {
  console.log(ex);
})


/**
 * 
 * 
 * 
 * {
	"Message": "OK",
	"RequestId": "D2FF6ACD-5277-486C-BC21-C10E20ABE144",
	"BizId": "872017674654459450^0",
	"Code": "OK"
}
 */