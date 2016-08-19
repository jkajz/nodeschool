var express = require('express');
var app = express();
var view = process.argv[3];

app.set('view engine', 'jade');
app.get('/home', function(req, res){
    res.render(view, {date: new Date().toDateString()});
});

app.listen(Number(process.argv[2]));
