import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Route1 from './ProtectedRoutes/Route1'
import SignUp from './Pages/SignUp'
import Todos from './Pages/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/todos" element={<Route1>
        <Todos/>
      </Route1>}/>
     </Routes>
    </>
  )
}

export default App
