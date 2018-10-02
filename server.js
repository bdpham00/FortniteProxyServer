var http = require('http');
var service = require('./service/service');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

service.getFortniteData(); 