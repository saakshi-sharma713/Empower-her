import React from 'react'
import { useContext } from 'react'
import  { TodosContext } from './Todos'
import TodoItem from './TodoItem';

const TodoList = () => {
    const {todos} = useContext(TodosContext);
    console.log(todos);
  return (
    <div>
      {todos.map((todo)=>(
         <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  )
}

export default TodoList
