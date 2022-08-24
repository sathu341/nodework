var fs=require("fs")
fs.readFile("file1.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});
 