var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var dbs = require("./mock/postdb.js");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/getSave",function(req,res){
    res.send(dbs.getSave);
})

server.post("/getSave",function(req,res){
    res.send(dbs.getSave);
})

server.use(router);
server.listen(9999,function(){
    console.log("起一个后端的服务");
})