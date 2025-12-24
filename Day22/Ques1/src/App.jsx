import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Todos from './Pages/Todos'
import ProtectedRoute from './ProtectedRoute'
import TodoDetails from './Pages/TodoDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/todo" element={<ProtectedRoute>
    <Todos/>
  </ProtectedRoute>}></Route>


<Route path="/todoDetails/:todoId" element={<ProtectedRoute>
    <TodoDetails/>
  </ProtectedRoute>}>

</Route>
</Routes>

    </>
  )
}

export default App
