var event=require("events");
var eventemitter=new event.EventEmitter();

var l1=function lister1(){
    console.log("lister1 executed");
}

var l2=function lister2(){
    console.log("lister2 executed");
}

eventemitter.addListener('connect',l1);
eventemitter.on('connect',l2);

eventemitter.emit('connect');