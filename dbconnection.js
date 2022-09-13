var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'housedb'
   

});

con.connect((err)=>{
 if (err) console.error(err);
 console.log("connected")
 var sql="insert into items(idno,itmname,qty) values(0,'Green gram','3kg')";
 con.query(sql,(err,result)=>{
    if(err) console.error(err);
    console.log("1 row effected");
 })
})