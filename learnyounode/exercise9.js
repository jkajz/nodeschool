var http = require('http');

var allData1 = '';
var allData2 = '';
var allData3 = '';

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var queue = {data1: false, data2: false, data3: false};

http.get(url1, function(res) {
    res.on("err", function(err){
        throw err;
    });
    res.on("data", function(data){
        allData1 += data.toString();
    });
    res.on("end", function(){
        queue.data1 = true;
        printResults();
    });
});

http.get(url2, function(res) {
    res.on("err", function(err){
        throw err;
    });
    res.on("data", function(data){
        allData2 += data.toString();
    });
    res.on("end", function(){
        queue.data2 = true;
        printResults();
    });
});

http.get(url3, function(res) {
    res.on("err", function(err){
        throw err;
    });
    res.on("data", function(data){
        allData3 += data.toString();
    });
    res.on("end", function(){
        queue.data3 = true;
        printResults();
    });
});

var printResults = function() {
    if (queue.data1 && queue.data2 && queue.data3) {
        console.log(allData1);
        console.log(allData2);
        console.log(allData3);
    }
};
