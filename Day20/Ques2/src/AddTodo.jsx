import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { TodosContext } from './Todos';
import TodoList from './TodoList';

const AddTodo = () => {
    const [data,setData] = useState("");
    const {addTodo} = useContext(TodosContext);
  function addData(){
      addTodo({title:data,id:Date.now()});
  }
  return (
    <div>
      <input type="text" value={data} onChange={(e)=> setData(e.target.value)}/>
      <button onClick={()=>{addData()}}>Add</button>

      
    </div>
  )
}

export default AddTodo
