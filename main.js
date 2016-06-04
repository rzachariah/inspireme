var express = require('express');
var request = require('request');

var mashapeToken = process.env.MASHAPE_TOKEN || '';
var port = process.env.PORT || 80;

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function(req,res){
  var category = 'movies';
  var options = {
    url: `https://andruxnet-random-famous-quotes.p.mashape.com/cat=${category}`,
    method: 'POST',
    headers: {
      'X-Mashape-Key': mashapeToken
    }
  };

  function callback(error, response, body) {
    console.log(response);
    if (!error && response.statusCode == 200) {
      console.log(body);
      var info = JSON.parse(body);
      var formatted = `"${info.quote}" - ${info.author}`;
      res.send(formatted);
    }
    else {
      console.log(error);
    }
  }

  request(options, callback);
});

app.listen(port, function(){
  console.log(`inspireme service started on port ${port}`);
});