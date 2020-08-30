var createError = require('http-errors');
var http = require('http');
var express = require('express');
let session = require('express-session');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var userGoalsRouter = require('./routes/userGoals');
var userInsightRouter = require('./routes/userInsight');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var cookiesRouter = require('./routes/cookies');
const path = require('path');
require("dotenv").config();

var app = express();
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

var port = process.env.PORT || '3001';
app.set('port', port);

// view engine setup
app.use(cors())
app.use(logger('dev'));
app.enable('trust proxy');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  key: 'user_sid',
  secret: process.env.session_secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 950400000
  }
}));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/questions', questionsRouter);
app.use('/api/userGoals', userGoalsRouter);
app.use('/api/userInsight', userInsightRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/cookies', cookiesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
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
 
});

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = app;
