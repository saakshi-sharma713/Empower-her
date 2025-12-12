import React from 'react'
import { useState,useEffect } from 'react'

const Counter = () => {
     const [count, setCount] = useState(0) 
     useEffect(()=>{
        if(count%3 == 0){
            alert(`The current number ${count} is divisible by 3`);
        }
     })
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default Counter
