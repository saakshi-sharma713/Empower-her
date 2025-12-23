import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodosContext } from './Todos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosContext>
  <App />
    </TodosContext>
  
  </StrictMode>,
)
