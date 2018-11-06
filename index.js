    var express = require('express');

    var app = express();

    app.get('/', function(req,res){
        res.send('Hello World!');
    })

    app.listen(3300);
    
    console.log(server set to http://3300);

