
var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/',function(req,res){
     res.send("<img src='images/wild (2).jpg' style='width:200px; height:150px;'/>")
})

var server = app.listen(8081, function () {
    var host = server.address();
    console.log(host);
    var port = server.address().port
    
    console.log("Example app listening at http://127.0.0.1:%s",port)
 
})