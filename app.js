var fs = require('fs')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')
var proxy = require('http-proxy-middleware')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(compression())
app.use('/', indexRouter);
app.use('/users', usersRouter);
// 代理
app.use('/api', proxy({
  target: 'http://localhost:3030',
  changeOrigin: true
}))
const reactRoutes = [
  /^\/examples\/?/,
  /^\/docs\/?/,
  /^\/test\/?/
]
app.use(function(req, res, next) {
  if (isReactRoute(req.url)) {
    console.log('get react routes..., return /index.html')
    fs.readFile(path.resolve(__dirname, 'public/index.html'), (error, indexHtml) => {
      if (error) {
        throw error;
      }
      res.setHeader('Content-Type', 'text/html')
      res.send(indexHtml);
    })
  } else {
   next();
  }
})

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

function isReactRoute(pathStr) {
  for (const item of reactRoutes) {
    if (typeof item == 'string' && item == pathStr) {
      return true;
    } else if (item instanceof RegExp && item.test(pathStr)) {
      return true
    }
  }
  return false;
}

module.exports = app;
