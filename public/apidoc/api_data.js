define({ "api": [
  {
    "type": "get",
    "url": "/api/address",
    "title": "地址列表",
    "description": "<p>地址列表</p>",
    "name": "_api_address",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n        code: '10017',\n        message: '暂未添加地址'\n      })\n  res.send({\n    code: '10119',\n    message: '无效的token'\n  })\n\n  res.send({\n        code: '200',\n        message: '地址列表',\n        data\n      })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/address"
      }
    ],
    "version": "1.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/api/address/add",
    "title": "添加地址",
    "description": "<p>添加地址</p>",
    "name": "_api_address_add",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>收件人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>收件人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>收件人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>userid</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flag",
            "description": "<p>是否是默认地址 （1 是 0 不是）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n           code: '10016',\n           message: '添加地址成功'\n         })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/address/add"
      }
    ],
    "version": "1.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/api/address/detail",
    "title": "地址详情",
    "description": "<p>地址详情</p>",
    "name": "_api_address_detail",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressid",
            "description": "<p>地址id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n       code: '200',\n       message: '地址详情',\n       data: data[0]\n     })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/address/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "post",
    "url": "/api/address/update",
    "title": "修改地址",
    "description": "<p>修改地址</p>",
    "name": "_api_address_update",
    "group": "address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>收件人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>收件人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>收件人地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "flag",
            "description": "<p>是否是默认地址 （1 是 0 不是）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n           code: '10018',\n           message: '修改地址成功'\n         })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/address/update"
      }
    ],
    "version": "1.0.0",
    "filename": "api/address.js",
    "groupTitle": "address"
  },
  {
    "type": "get",
    "url": "/api/cart",
    "title": "获取购物车数据",
    "description": "<p>获取购物车数据</p>",
    "name": "_api_cart",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n        code: '10012',\n        message: '购物车空空如'\n      })\n  res.send({\n    code: '10119',\n    message: '无效的token'\n  })\n\n  res.send({\n      code: '200',\n      message: '购物车的列表数据',\n      data\n    })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/cart"
      }
    ],
    "version": "1.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "post",
    "url": "/api/cart/add",
    "title": "加入购物车",
    "description": "<p>加入购物车</p>",
    "name": "_api_cart_add",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "proid",
            "description": "<p>产品id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "num",
            "description": "<p>加入购物车的数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n         code: '10011',\n         message: '加入购物车成功'\n       })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/cart/add"
      }
    ],
    "version": "1.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "get",
    "url": "/api/cart/delete",
    "title": "删除数据",
    "description": "<p>删除数据</p>",
    "name": "_api_cart_delete",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cartid",
            "description": "<p>购物车id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n        code: '10014',\n        message: '删除成功'\n      })\n  res.send({\n    code: '10119',\n    message: '无效的token'\n  })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/cart/delete"
      }
    ],
    "version": "1.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "get",
    "url": "/api/cart/update",
    "title": "更新购物车",
    "description": "<p>更新购物车</p>",
    "name": "_api_cart_update",
    "group": "cart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cartid",
            "description": "<p>购物车id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "num",
            "description": "<p>购物车数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n        code: '10013',\n        message: '更新成功'\n      })\n  res.send({\n    code: '10119',\n    message: '无效的token'\n  })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/cart/update"
      }
    ],
    "version": "1.0.0",
    "filename": "api/cart.js",
    "groupTitle": "cart"
  },
  {
    "type": "get",
    "url": "/api/kind/category",
    "title": "获取大分类",
    "description": "<p>获取大分类</p>",
    "name": "_api_kind_category",
    "group": "kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>商品的分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n     code: '200',\n     message: '分类列表',\n     data: data\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/kind/category"
      }
    ],
    "version": "1.0.0",
    "filename": "api/kind.js",
    "groupTitle": "kind"
  },
  {
    "type": "get",
    "url": "/api/kind/categorybrand",
    "title": "获取大分类下的品牌",
    "description": "<p>获取大分类下的品牌</p>",
    "name": "_api_kind_categorybrand",
    "group": "kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>商品的分类</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n     code: '200',\n     message: '分类列表',\n     data: data\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/kind/categorybrand"
      }
    ],
    "version": "1.0.0",
    "filename": "api/kind.js",
    "groupTitle": "kind"
  },
  {
    "type": "get",
    "url": "/api/kind/categorylist",
    "title": "获取大分类下的品牌下的数据",
    "description": "<p>获取大分类下的品牌下的数据</p>",
    "name": "_api_kind_categorylist",
    "group": "kind",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>商品的分类</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brand",
            "description": "<p>品牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n     code: '200',\n     message: '分类列表',\n     data: data\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/kind/categorylist"
      }
    ],
    "version": "1.0.0",
    "filename": "api/kind.js",
    "groupTitle": "kind"
  },
  {
    "type": "post",
    "url": "/api/order/add",
    "title": "提交订单",
    "description": "<p>加入购物车</p>",
    "name": "_api_order_add",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "list",
            "description": "<p>列表的数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n         code: '10015',\n         message: '提交订单成功'\n       })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/order/add"
      }
    ],
    "version": "1.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/order/detail",
    "title": "订单详情",
    "description": "<p>订单详情</p>",
    "name": "_api_order_detail",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n       code: '200',\n       message: '订单详情',\n       data\n     })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/order/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/api/order/updateOrder",
    "title": "修改订单",
    "description": "<p>修改订单</p>",
    "name": "_api_order_updateOrder",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "cartidarr",
            "description": "<p>购物车id的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>收件人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "note",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n       code: '10019',\n       message: '修改订单成功'\n     })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/order/updateOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/order/updatepay",
    "title": "修改订单的支付方式",
    "description": "<p>修改订单的支付方式</p>",
    "name": "_api_order_updatepay",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "paytype",
            "description": "<p>支付方式</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n       code: '10019',\n       message: '修改订单成功'\n     })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/order/updatepay"
      }
    ],
    "version": "1.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/order/updatestatus",
    "title": "修改订单的状态",
    "description": "<p>修改订单的状态</p>",
    "name": "_api_order_updatestatus",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单id</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "status",
            "description": "<p>// 0 未支付 1 待收货 2 待评价 3 已完成</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "res.send({\n       code: '10019',\n       message: '修改订单成功'\n     })\n   res.send({\n     code: '10119',\n     message: '无效的token'\n   })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/order/updatestatus"
      }
    ],
    "version": "1.0.0",
    "filename": "api/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/api/pro",
    "title": "获取产品列表接口1111",
    "description": "<p>列表</p>",
    "name": "_api_pro",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageCode",
            "description": "<p>页码（从0开始）</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "limitNum",
            "description": "<p>每页显示个数（默认为10）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 没有更多数据了\n{\n code: '10000',\n message: '没有更多数据了'\n}\n// 正常\n{\n   code: '200',\n   message: '获取产品的数据',\n   length: data.length, // 获取到多少条数据\n   data: data // 获取到的数据\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/pro"
      }
    ],
    "version": "1.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/category",
    "title": "产品分类",
    "description": "<p>产品分类</p>",
    "name": "_api_pro_category",
    "group": "pro",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   code: '200',\n   message: '获取产品的数据',\n   data: ['', ''] \n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/pro/category"
      }
    ],
    "version": "1.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/detail",
    "title": "产品详情",
    "description": "<p>产品详情</p>",
    "name": "_api_pro_detail",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "proid",
            "description": "<p>产品id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   code: '200',\n   message: '获取产品的详情数据',\n   data: {\n \"__v\": 0,\n        \"proname\": \"荣耀20\",\n        \"type\": \"手机\",\n        \"proimg\": \"\",\n        \"brand\": \"华为\",\n        \"brandimg\": \"\",\n        \"price\": 2299,\n        \"stock\": 1000,\n        \"sales\": 50,\n        \"rating\": 5,\n        \"flag\": 0,\n        \"note\": \"\",\n        \"detail\": \"\",\n        \"proid\": \"pro_d245ee20-0c40-11ea-9bb7-f90a52a739bb\"\n    }\n}\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/pro/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/pro/sort",
    "title": "产品排序",
    "description": "<p>产品排序</p>",
    "name": "_api_pro_sort",
    "group": "pro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>排序规则（price 价格 / stock 库存 / sales 销量 / rating  评分/ flag 推荐）</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "num",
            "description": "<p>升序还是降序（num 1 升序）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 没有更多数据了\n{\n code: '10000',\n message: '没有更多数据了'\n}\n// 正常\n{\n   code: '200',\n   message: '获取产品的数据',\n   length: data.length, // 获取到多少条数据\n   data: data // 获取到的数据\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/pro/sort"
      }
    ],
    "version": "1.0.0",
    "filename": "api/pro.js",
    "groupTitle": "pro"
  },
  {
    "type": "get",
    "url": "/api/users/getInfo",
    "title": "获取用户信息",
    "description": "<p>获取用户信息</p>",
    "name": "_api_users_getInfo",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 未登录\nres.send({ \n    code: '10119', \n    message: '没有找到token.' \n  });\n\nres.send({\n      code: '200',\n      message: '获取用户的信息',\n      data: {\n        username, tel, sex, birthday, email, userid\n      }\n    })",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/getInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "登陆接口",
    "description": "<p>登陆接口</p>",
    "name": "_api_users_login",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 登陆成功\n{\n   code: '10008',\n   message: '登陆成功',\n   \"data\": {\n        \"userid\": \"user_73e91fc0-157b-11ea-9536-db1ce873a934\",\n        \"username\": \"wudaxun\",\n        \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWwiOiIxODgxMzAwNzgxNCIsImlhdCI6MTU3NjIyMDM2NiwiZXhwIjoxNTc2ODI1MTY2fQ.AbkxGcEbD4zD_UaP3Y_dty38E8ZKEuAyjo9IKsJRFEI\"\n    }\n }\n // 密码错误\n{\n   code: '10007',\n   message: '密码错误'\n }\n // 用户未注册\n{\n   code: '10006',\n   message: '用户未注册'\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "注册接口",
    "description": "<p>注册接口</p>",
    "name": "_api_users_register",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 注册成功\n{\n   code: '10002',\n   message: '注册成功'\n }\n // 注册失败\n{\n   code: '10003',\n   message: '注册失败'\n }\n // 用户已注册\n{\n   code: '10001',\n   message: '用户已注册'\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/api/users/sendCode",
    "title": "发送短信验证码",
    "description": "<p>发送短信验证码</p>",
    "name": "_api_users_sendCode",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>联系方式</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 发送成功\n{\n   code: '10004',\n   message: '发送验证码成功'\n   data: code\n }\n // 发送失败\n{\n   code: '10005',\n   message: '发送验证码失败'\n }\n // 用户已注册\n{\n   code: '10001',\n   message: '用户已注册'\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/sendCode"
      }
    ],
    "version": "1.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/users/update",
    "title": "修改个人中心",
    "description": "<p>修改个人中心</p>",
    "name": "_api_users_update",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tel",
            "description": "<p>联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "sex",
            "description": "<p>性别 （1 表示男  0 表示女）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "// 修改个人信息成功\n{\n   code: '10009',\n   message: '修改个人信息成功'\n }\n // 修改个人信息失败\n{\n   code: '10010',\n   message: '修改个人信息失败'\n }",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/users/update"
      }
    ],
    "version": "1.0.0",
    "filename": "api/users.js",
    "groupTitle": "users"
  }
] });
