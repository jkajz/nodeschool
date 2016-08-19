var net = require('net');

var appendZero = function (number) {
    if (number < 10) {
        return ('0' + number);
    } else {
        return number;
    }
};


var server = net.createServer(function(socket) {
    var date = new Date();
    var formattedDate = date.getFullYear() +
        '-' + appendZero(date.getMonth() + 1) +
        '-' + appendZero(date.getDate()) +
        ' ' + appendZero(date.getHours()) +
        ':' + appendZero(date.getMinutes());
    socket.end(formattedDate + '\n');
});
server.listen(Number(process.argv[2]));
