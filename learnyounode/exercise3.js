var fs = require('fs');

var pathToFile = process.argv[2];

var buffer = fs.readFileSync(pathToFile);

var fileAsString = buffer.toString();

var splitArray = fileAsString.split('\n');

console.log(splitArray.length - 1);
