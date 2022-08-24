const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'})
    fs.readFile("mango.txt",(err,data)=>{
        if(err)return console.error(err);
        res.end(data.toString());
    })
});

server.listen(8081);
console.log(" server link: http://127.0.0.1:8081/");