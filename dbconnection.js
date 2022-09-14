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
 var sql="insert into items(idno,itmname,qty) values(0,'Wheat','50kg')";
 var sql2="UPDATE items SET itmname='Wheat FLour' WHERE idno=4";
 con.query(sql2,(err,result)=>{
    if(err) console.error(err);
    console.log("1 row effected");
 })
})