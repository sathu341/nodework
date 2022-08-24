const  fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on('request',(req,res)=>{
    const rstream=fs.createReadStream("mango.txt");
    res.writeHead(200,{'content-Type':'text/plain'})
    rstream.on('data',(ch)=>{
         res.write(ch);
     
    });
    rstream.on('end',()=>{
        res.end()
    });
    rstream.on('error',(err)=>{
      console.error(err);
      res.end(err);
    });
});
server.listen(8081);
console.log(" server link: http://127.0.0.1:8081/");