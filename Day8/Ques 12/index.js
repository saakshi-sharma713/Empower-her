const duration = 3000;
function timer(duration,onComplete){
  setTimeout(()=>{
  onComplete();
  },duration);
}
function onComplete(){
    console.log(`Timer of ${duration} ms finished`);
}
timer(duration,onComplete);