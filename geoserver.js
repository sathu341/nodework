var express=require('express')
var app=express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded())

app.get("/",(req,res,next)=>{
    res.render('addition',{'result':""})
});

app.post('/addpost',(req,res,next)=>{
    var no1=req.body.n1;
    var no2=req.body.n2;
    var c=parseFloat(no1)+parseFloat(no2)
    res.render('addition',{'result':c})

})

app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})