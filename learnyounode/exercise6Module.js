var fs = require('fs');
var path = require('path');

module.exports = function (pathToDir, extension, callback) {
  var err = null;
  if (!pathToDir) {
    err = "Argument missing!";
    return callback(err, null);
  }
  if (!extension) {
    err = "Argument missing!";
    return callback(err, null);
  }
  extension = "." + extension;
  fs.readdir(pathToDir, function(err, data){
    if (err) {
      return callback(err, null);
    }
    var fileList = data.filter(function(el){
      if (path.extname(el) === extension) {
        return true;
      }
      else {
        return false;
      }
    });

    callback(null, fileList);
  });
};
