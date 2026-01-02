import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './Pages/TodoList'
import { Routes,Route } from 'react-router-dom'
import TodoDetails from './Pages/TodoDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes> 
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todo/:id" element={<TodoDetails/>}/>
      </Routes>
    </>
  )
}

export default App
