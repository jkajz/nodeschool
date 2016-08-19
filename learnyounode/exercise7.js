var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
    res.on("err", function(err){
        throw err;
    });
    res.on("data", function(data){
        console.log(data.toString());
    });
});
