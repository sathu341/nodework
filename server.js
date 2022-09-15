const express= require('express')
const app=express()
app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index',{'title':'coffeehouse','heading':'welcome to  coffee house'});
});
//about page creation
app.get('/about',(req,res)=>{
    res.render('aboutus',{'page':"About us",'content':'" this app help to find  tradetional coffee item in kerala'})
}
);


app.listen(9000,()=>{
    console.log('server running http://localhost:9000/');
});

