import React, { useState } from 'react'


const MyComponent = () => {
      const [isRed, setIsRed] = useState(true);
    
    
  return (
    <div style={{backgroundColor: isRed ? "red" : "blue", width:"300px", height:"200px", color:"white", display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column",gap:"20px"}}>
     Hii Everyone !!

     <button onClick={()=>{
      setIsRed(!isRed)
     }}>
      Change Color
     </button>
    </div>
  )
}

export default MyComponent
