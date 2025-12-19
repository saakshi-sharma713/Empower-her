import React, { useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const MyComponent = () => {
    const [status,setStatus] = useState(false);
  return (
    <div>{
        status ? <ComponentA/> : <ComponentB/>
        }
     
     <button onClick={()=>{
        setStatus(!status)
     }}>Change Status</button>
     
    </div>
  )
}

export default MyComponent
