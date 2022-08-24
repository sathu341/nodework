var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function(req ,res){
  var pathname=url.parse(req.url).pathname;
  console.log("Request For"+pathname+" recivied");
  fs.readFile(pathname.substring(1),function(err,data){
    if(err){
        console.log(err);
        res.writeHead(404,{"ContentType": "text/html"});
    }
    else{
        res.writeHead(200,{"ContentType":"text/html"});
        res.write(data.toString());
    }
    res.end();
  });
}).listen(8081);
console.log("server running at http://127.0.0.1:8081/");