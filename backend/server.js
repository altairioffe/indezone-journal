var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
let session = require('express-session');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var biodatasRouter = require('./routes/biodatas');
var userGoalsRouter = require('./routes/userGoals');
var userInsightRouter = require('./routes/userInsight');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');

var app = express();

// view engine setup

app.use(cors())
app.use(logger('dev'));
//app.use(cookieParser());
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));


app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/biodatas', biodatasRouter);
app.use('/api/userGoals', userGoalsRouter);
app.use('/api/userInsight', userInsightRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
console.log(err.status)
  // render the error page
  res.status(err.status || 500);
 
});

module.exports = app;
