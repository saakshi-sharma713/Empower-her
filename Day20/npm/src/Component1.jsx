import React, { useContext } from 'react'
import { AppContext } from './AppContext'
import Component2 from './Component2';

const Component1 = () => {
    const {a,b,c,d,e,f} = useContext(AppContext);
  return (
    <div>
        <h2>Component 1</h2>
   <h4> This is prop a:{a}</h4> 
   <h4> This is prop b:{b}</h4> 
   <h4> This is prop c:{c}</h4> 
   <h4> This is prop d:{d}</h4> 
   <h4> This is prop e:{e}</h4> 
   <h4> This is prop f:{f}</h4> 
     
     <Component2/>

    </div>
  )
}

export default Component1
