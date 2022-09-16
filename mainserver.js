const  express=require('express')
const app=express()

app.use(express.urlencoded())

app.set('view engine','ejs')
app.use(express.static('style'))

app.get('/',(req,res)=>{
    res.render('base')

})
//about page
app.get('/about',(req,res)=>{
    res.render('about')
})
app.post('/addmedicine',(req,res,next)=>{
    var mnam=req.body.mname;
    // res.send(mnam)
    res.render('about',{'mname':mnam})
})
app.listen(9000,()=>{
    console.log("server running http://localhost:9000/")
})