import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getTodoById } from '../api/TodoService';
import { useState } from 'react';

const TodoDetails = () => {
    const {id} = useParams();
    const[todo,setTodo] = useState({}); 
    console.log(id);
    useEffect(()=>{
      const fetchTodoById = async()=>{
       const res = await getTodoById(id);
       console.log(res.data);
       setTodo(res.data);
      }
      fetchTodoById();
    },[id])
  return (
    <div class="card">
      <h2>Id : {todo.id}</h2>
      <h2> Title </h2>
      <h3> {todo.title}</h3>
      <h3> Status : <span style={{ color: todo.completed ? "green": "red"}}>{todo.completed ? "Completed" : "Not Completed"}</span></h3>
    </div>
  )
}

export default TodoDetails
