var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes= require('./routes');
const PORT = process.env.PORT || 3001;
var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './')));

app.use(routes);
var toneAnalyzer = new ToneAnalyzerV3({
    username: "a024676d-1867-42c5-9fac-5908cc52cf02",
    password: "JEK6jBlRLqrN",
    version_date: "2016-05-19",
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api/'
});


app.post('/api/tone', function (req, res, next) {
  toneAnalyzer.tone(req.body, function (err, data) {
    if (err) {
      return next(err);
    }
    return res.json(data);
  });
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json(err);
// });


app.listen(PORT, function(){
  console.log(PORT)

});



module.exports = app;
