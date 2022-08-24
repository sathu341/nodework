var express=require('express');
var app=express();
var  fs=require("fs");
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

app.get("/listuser",(req,res)=>{
    fs.readFile(__dirname+"/"+"dataset.json","utf-8",(err,data)=>{
        console.log(data.toString());
        res.end(data.toString());
    })

});

app.get('/:id',(req,res)=>{
  fs.readFile(__dirname+"/dataset.json",'utf-8',(err,data)=>{
    data=JSON.parse(data);
    user=data["user"+req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  })
});
app.get('/Deleteuser/:id',(req,res)=>{
    fs.readFile(__dirname+"/dataset.json",'utf-8',(err,data)=>{
      data=JSON.parse(data);
      delete data["user"+req.params.id];
      console.log(data);
      res.end(JSON.stringify(data));
    })
  });
app.get("/listuser2",(req,res)=>{
    fs.readFile(__dirname+"/"+"dataset.json","utf-8",(err,data)=>{
        console.log(data.toString());
        res.end(data.toString());
    })

});

app.listen(8081,()=>{
    console.log("Server running http://localhost:8081/");
});