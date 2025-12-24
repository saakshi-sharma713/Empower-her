import React, { useEffect, useState } from 'react'
import {Link,  useNavigate} from 'react-router-dom'
import TodoDetails from './TodoDetails';
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
     function LogOut(){
         navigate("/login");
        localStorage.clear();
       
     }
  
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data.slice(0, 10)))
    }, [])
    console.log(todos);
    return <>
        <h1 style={{display:"flex", justifyContent:"space-between", width:"90vw", margin:"auto", marginBottom:"25px"}}>Todos 
            <button style={ LogOutBtn} onClick={()=>{
                LogOut()
            }}>Logout</button></h1>
        <div className='box'>
            {todos.map((val) => (
          <Link style={todoItem} to={`/todoDetails/${val.id}`}> <h3>Title : {val.title}</h3>
           <h4 >Completion Status : <span style={{ color:val.completed?"green":"red"}}>{val.completed ? "Completed"  : "Not Completed"}</span></h4></Link>  
            ))}
        </div>

       
    </>
}

const todoItem ={
    backgroundColor:"white",
    border:"none",
    borderRadius:"8px",
    display:"block",
    height:"100px",
    marginBottom:"20px",
    textDecoration:"none",
    color:"black",
    padding:"10px",
    width:"80vw",
    margin:"auto"
}
const LogOutBtn={
    backgroundColor:"red",
    color:"white",
    height:"32px",
border:"none",
borderRadius:"8px",
width:"150px"
}

export default Todos
