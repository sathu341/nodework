const fs=require('fs');
const http= require("http");
const server=http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{'content-Type': 'text/plain'});
    var fs=require("fs");
    fs.readFile("input.txt",(err,data)=>{
               if(err) return console.error(err);
               res.end(data.toString());
    });
});

server.listen(8081,"127.0.0.1");
console.log('server  running at  http://127.0.0.1:8081/');