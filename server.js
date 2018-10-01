var http = require('http');

var options = {
    host: 'api.fortnitetracker.com', 
    port: 80,
    path: 'https://jsonplaceholder.typicode.com/posts',
    method: 'GET'
}

http.request(options, function(res){
    var body = ''; 

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function() {
        var json = JSON.parse(body);
        console.log(json);
    })
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);