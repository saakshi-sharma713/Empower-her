import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
const ProtectedRoute = ({children}) =>{
    const isLoggedIn = localStorage.getItem("isLoggedIn") ;
     const navigate = useNavigate();
 useEffect(() => {
  if (!isLoggedIn) {
    navigate("/login"); 
  }
}, [isLoggedIn]);

  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedRoute;
