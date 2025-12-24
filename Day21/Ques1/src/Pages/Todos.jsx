import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data.slice(0, 10)))
    }, [])
    console.log(todos);
    return (
        <div className='box'>
            {todos.map((val) => (
                <div style={card} >
                  <h3>Title : {val.title}</h3>
                  <h4 >Completion Status : <span style={{ color:val.completed?"green":"red"}}>{val.completed ? "Completed"  : "Not Completed"}</span></h4>
                </div>
            ))}
        </div>
    )
}
const card = {
    border: "1px solid #fff",
    boxShadow: "8px 10px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor:"white",
    padding:"8px"
}


export default Todos
