function printHello(){
    console.warn("hello world!...");
}

var t=setTimeout(printHello,5000)
setTimeout(printHello,2000);
clearTimeout(t);
