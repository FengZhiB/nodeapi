var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('order', { activeIndex: 6 })
});

module.exports = router;
