var express = require('express');
var crypto = require('crypto');

var app = express();

//register route
app.put('/message/:ID', (req, res) => {
    var hash = crypto.createHash('sha1').update(new Date().toDateString().toString() + req.params.ID).digest('hex');
    res.send(hash);
});

app.listen(Number(process.argv[2]));
