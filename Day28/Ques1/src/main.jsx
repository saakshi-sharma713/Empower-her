import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContextt from './Context/AuthContextt.jsx'
import {BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextt>
      <BrowserRouter>
       <App />
      </BrowserRouter>
       
    </AuthContextt>
  </StrictMode>,
)
