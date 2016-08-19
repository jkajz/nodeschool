var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var qs = url.parse(req.url, true);
        var date;
        if (qs.pathname === '/api/parsetime') {
            if (qs.query.iso) {
                date = new Date(qs.query.iso);
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify({
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                }));
                res.end();
            }
        }
        if (qs.pathname === '/api/unixtime') {
            if (qs.query.iso) {
                date = new Date(qs.query.iso);
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify({
                    "unixtime": date.getTime()
                }));
                res.end();
            }
        }
    }
});

server.listen(Number(process.argv[2]));
