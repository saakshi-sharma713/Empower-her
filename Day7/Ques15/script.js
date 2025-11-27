let count=Number(prompt("Enter Count:"));
let a=(count) * 1000;
const timer = setInterval(()=>{
    console.log(count);
    count--;
},1000);

setTimeout(()=>{
clearInterval(timer);
 console.log("Countdown Complete!");
},a);


