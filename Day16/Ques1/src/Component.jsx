import React from 'react'
import { useState } from 'react';

const Component = () => {
      const [count, setCount] = useState(0);
  return <>

    
      <h3> count is {count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         counter
        </button>
        
      </div>
      
    
  </>
}

export default Component
