var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 后台管理系统的路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var proRouter = require('./routes/pro');
var bannerRouter = require('./routes/banner');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');

// 后台接口的路由
var proApi = require('./api/pro');
var usersApi = require('./api/users');
var cartApi = require('./api/cart');
var orderApi = require('./api/order');
var addressApi = require('./api/address');
var kindApi = require('./api/kind');

var app = express();
/** 自定义中间件 */
var allowCrossDomain = function (req, res, next) {
  // 所有的接口都可以访问
  res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
  res.header('Access-Control-Allow-Headers', '*');//自定义中间件，设置跨域需要的响应头。
  next();
}
app.use(allowCrossDomain); // 使中间件生效 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// 后台管理系统的路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pro', proRouter);
app.use('/banner', bannerRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

// 后台接口的路由
app.use('/api/pro', proApi);
app.use('/api/users', usersApi);
app.use('/api/cart', cartApi);
app.use('/api/order', orderApi);
app.use('/api/address', addressApi);
app.use('/api/kind', kindApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
