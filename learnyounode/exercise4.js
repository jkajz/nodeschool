/**
 * Async file load
 */

var fs = require('fs');

var pathToFile = process.argv[2];

fs.readFile(pathToFile, function(err, data) {
  if (err) {
    throw err;
  }
  var splitArray = data.toString().split('\n');
  console.log(splitArray.length - 1);
});
