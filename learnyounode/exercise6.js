var myModule = require('./exercise6Module.js');

myModule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    throw err;
  }
  data.forEach(function(el){
    console.log(el);
  });
});
