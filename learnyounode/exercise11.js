var http = require('http');
var fs = require('fs');

var pathToFile = process.argv[3];

var server = http.createServer(function(req, res) {
    var fileStream = fs.createReadStream(pathToFile);
    fileStream.pipe(res);
});

server.listen(Number(process.argv[2]));
