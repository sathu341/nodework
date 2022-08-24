// const  buf= Buffer.from("welcome");
// console.log(buf.toString());
// console.log(buf[0]);

// const buf=Buffer.alloc(24);
// buf.write("Hey welcome to the  world!..");
// console.log(buf.toString());

bf=Buffer.alloc(256);
ln=bf.write("welcome");
rbf=Buffer.from("welcome");
console.log(rbf.toString());