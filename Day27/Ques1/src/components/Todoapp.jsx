import React, { useState } from 'react'
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
const Todoapp = () => {
    const [todos,setTodo] = useState([]);
     const [todotext,setText] = useState("");
    function addTodo(data){
        if(data == "") return ;
        setTodo((prev)=>[...prev,{id:Date.now(),data,status:false}]);
        setText("");
        
    }
console.log(todos);
    function Status(id){
        setTodo(todos.map((todo)=> todo.id === id ? {...todo,status:!todo.status} : todo ));
        
    }
  return <>
    <div className="flex w-1/2">
      <Input value={todotext} onChange={(e)=>{setText(e.target.value)}}/>
      <Button onClick={()=>{addTodo(todotext)}}>Add</Button>
    </div>
    <div>
        {
            todos.map((todo)=>(
                <div className='w-56'>
                <Card  className="flex flex-row items-center justify-between p-2">
                    <span className={todo.status ? "line-through text-gray-400" : "no-underline text-black"}>{todo.data}</span>
                <Checkbox checked={todo.status} onCheckedChange={()=>{Status(todo.id)}}/>

</Card>

                    </div>
            ))
        }
    </div>
  </>
}

export default Todoapp
