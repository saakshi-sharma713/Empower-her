const idd = setInterval(()=>{
    console.log("Loading ....");
},1000);

setTimeout(()=>{
clearInterval(idd);
console.log("Loaded Successfully !");
},5000)
