var express = require('express');
var bodyparser = require('body-parser');

var app = express();

//attach middleware
app.use(bodyparser.urlencoded({extended: false}));

//configure route
app.post('/form', function(req, res) {
    var str = req.body.str.split('').reverse().join('');
    res.send(str);
});
app.listen(Number(process.argv[2]));
