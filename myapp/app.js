var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const session = require("express-session");

var indexRouter = require('./routes/index');
var commentRouter = require('./routes/comment');//评论
var goodsRouter = require('./routes/goods');//商品
var ordersRouter = require('./routes/orders');//订单
var petRouter = require('./routes/pet');//宠物
var petMemberRouter = require('./routes/petMember');//宠主
var serveRouter = require('./routes/serve');//服务
var storefrontRouter = require('./routes/storefront');//门店
var usersRouter = require('./routes/users');//用户

require('./dao/database'); //引入数据库的东西


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '123', //随便给一个字符串,用这总方式加密
  resave: true,
  saveUninitialized: true,
}));

app.use('/', indexRouter);
app.use('/comment', commentRouter);//评论
app.use('/goods', goodsRouter);//商品
app.use('/orders', ordersRouter);//订单
app.use('/pet', petRouter);//宠物
app.use('/petMember', petMemberRouter);//宠主
app.use('/serve', serveRouter);//服务
app.use('/storefront', storefrontRouter);//门店
app.use('/users', usersRouter);//用户




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
// 快捷方式
app.listen('3000', function () {
  console.log('3000端口启动成功！');
});