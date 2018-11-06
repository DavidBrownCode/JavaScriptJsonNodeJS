var http = require('http');
var express = require('espress');
var path = require ('path');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.normalize(__dirname) + '/public'));


app.use(function(req, res, next){
    console.log('Request from ' + req.ip);
    next();
});

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/about', function(req, res){
    console/log('about');
    res.send('About Us!');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost: ' + app.get('port'));
});

