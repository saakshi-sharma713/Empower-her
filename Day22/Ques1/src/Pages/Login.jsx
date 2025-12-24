import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
      const navigate = useNavigate();
    function handleLogin(){
        if(email=="admin@gmail.com" && password=="admin@123"){
            localStorage.setItem("isLoggedIn","true");
            navigate("/todo");
        }
        else{
            alert("Invalid email or password");
        }
    }
  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column"}} >
      <h1>Login Page</h1>
      <form style={container}>
        <input style={formFields} type="email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input style={formFields} type="password" placeholder='Enter Password'value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button style={formButton} onClick={()=>{handleLogin()}}>Login</button>
      </form>
    </div>
  )
}

const container={
   
    width:"20%",
    height:"250px",
    display:"flex",
    flexDirection:"column",
    gap:"15px",
    padding:"15px",
     border:"2px solid gray",
  backgroundColor:"white",
}
const formFields ={
 height:"30px",
 border:"none",
 borderRadius:"8px",
 padding:"5px",
border:"1px solid gray",
}
const formButton ={
 height:"32px",
border:"none",
borderRadius:"8px",
backgroundColor:"royalblue",
color:"white",
}
export default Login
