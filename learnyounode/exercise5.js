var fs = require('fs');
var path = require('path');

var pathToDir = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(pathToDir, function(err, files) {
    if (err) {
        throw err;
    }
    files.map(function(element) {
        if (path.extname(element) === extension) {
            console.log(element);
        }
    });
});
