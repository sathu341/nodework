var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'ContentType':'text/plain'});
    res.end("<h1> Hello World! </h1>");
}).listen(8180);

console.log("Server running http://localhost:8180/");