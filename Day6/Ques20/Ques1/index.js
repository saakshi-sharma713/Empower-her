function createCounter() {
  let count = 0;  // private variable

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      console.log("Current count:", count);
    }
  };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
