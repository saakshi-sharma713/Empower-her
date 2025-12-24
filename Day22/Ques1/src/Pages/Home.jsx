import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column", background:"white", padding:"10px"}}>
      <h1>Welcome to Home Page</h1>
      <button style={{
      height:"32px",
      width:"200px",
border:"none",
borderRadius:"8px",
backgroundColor:"royalblue",
color:"white",
}} onClick={()=>{navigate("/login")}}>Login</button>
    </div>
  )
}

export default Home
