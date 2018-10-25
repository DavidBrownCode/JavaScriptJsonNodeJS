    var http = require('http');
    function responseHandler(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello David\n');cds
    }
    http.createServer(responseHandler).listen(1337, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:1337/');

    