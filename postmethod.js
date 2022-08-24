
var express=require("express");
var app=express()
var  fs=require("fs")
var person={
    "user4":{
        "name":"Sara",
         "password":7782,
         "id":4
    }
}
app.get("/adduser",(req,res)=>{
    fs.readFile(__dirname+"/"+"dataset.json","utf-8",(err,data)=>{
        data=JSON.parse(data);
        data['user4']=person['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    })

});
app.listen(8081,()=>{
    console.log("server running  http://localhost:8081/");
})
