var express = require('express');
var app = express();
var url = require('url');
var sys = require('util');
var server = require('http').createServer(app);
var jwt = require('jsonwebtoken');
var io = require('socket.io')(server);
var path = require('path');
var port = 8080;

console.log(__dirname);

app.engine('.html', require('ejs').__express);
app.set('views', './views');
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('index');
});

io.on('connection', function(client){
  
});
/*
app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');
});
*/
app.use(express.static(path.join('./public')));

server.listen(port);