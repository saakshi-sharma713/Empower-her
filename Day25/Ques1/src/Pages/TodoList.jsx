import React from 'react'
import { getTodoById, getTodos } from '../api/TodoService'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const TodoList = () => {
  const [todos,setTodos] = useState([]);
    useEffect(()=>{
    const fetchTodo = async()=>{
       const res = await getTodos();
          setTodos(res) ;
          console.log(res);
    }
    fetchTodo();
        getTodoById();
    },[])
    
  return (
    <div>
      <h1>TodoList</h1>
      <div>
        {todos.map((todo)=>(
        <Link style={{color:"black" ,display:"flex", backgroundColor:"beige", border:"2px solid none",borderRadius:"8px",margin:"5px",justifyContent:"space-between",padding:"10px 20px"}}
        to={`/todo/${todo.id}`}>
         <h3>{todo.title}</h3>
         <h3 >Status : <span style={{ color: todo.completed ? "green": "red"}}>{todo.completed ? "Completed" : "Not Completed"}</span></h3>
        </Link>
      ))}
      </div> 
    </div>
  )
}

export default TodoList
