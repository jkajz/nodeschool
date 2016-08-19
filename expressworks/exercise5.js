var express = require('express');
var stylus = require('stylus');

var app = express();

var pathToStatic = process.argv[3];
//attach stylus middleware
app.use(stylus.middleware(pathToStatic));
//attach static middleware
app.use(express.static(pathToStatic));

app.listen(Number(process.argv[2]));
