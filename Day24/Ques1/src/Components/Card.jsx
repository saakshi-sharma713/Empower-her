import React from 'react'

const Card = React.memo(() => {
    console.log("child Rendered")
    const items=[];
    for(let i=1; i<=5000; i++){
        items.push(`Item no : ${i}`)
    }
  return (
    <div>
      {items.map((item)=>{
         return <div style={{backgroundColor:"royalblue"}}>
           <h1> {item}</h1>
            </div>

      })}
    </div>
  )
})

export default Card
