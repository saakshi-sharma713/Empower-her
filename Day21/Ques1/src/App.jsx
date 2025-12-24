import { useState } from 'react'
import './App.css'
import Todos from './Pages/Todos'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes> 
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutus" element={<About/>}></Route>
        <Route path="/todos" element={<Todos/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
