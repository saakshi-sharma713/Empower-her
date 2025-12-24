import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const TodosContext = createContext();
const TodoContext = ({children}) => {
  const [todos,setTodo] = useState([]);

  function addTodo({title,id}){
     setTodo((prev) => [...prev,{title,id}])
  }

  function deleteTodo(id){
  setTodo(todos.filter((val)=>{
    if(id != val.id){
      return val;
    }
  }))
  }

  return (
    <div>
      <TodosContext.Provider value={{addTodo,deleteTodo,todos}}>
{children}
      </TodosContext.Provider>
    </div>
  )
}

export default TodoContext
