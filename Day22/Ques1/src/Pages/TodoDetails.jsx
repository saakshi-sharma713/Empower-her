import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
  const {todoId} = useParams();
  console.log(todoId);
  const [val,setVal] = useState("");
 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  .then((res)=> res.json())
  .then((data)=> setVal(data));
 },[todoId])
 console.log(val);
  return (
    <div style={card} >
                   <h2>Id : {val.id} </h2>
                  <h3>Title : {val.title}</h3>
                  <h4 >Completion Status : <span style={{ color:val.completed?"green":"red"}}>{val.completed ? "Completed"  : "Not Completed"}</span></h4>
    </div>
  )
}
const card = {
    border: "1px solid #fff",
    boxShadow: "8px 10px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor:"white",
    padding:"8px",
    width:"30%"
}
export default TodoDetails
