import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Todos from '../Pages/Todos'

const Navbar = () => {
  return (
    <div style={navStyle}>
        <h2>
            Logo
        </h2>
        <div style={{width:"40%", display:"flex", justifyContent:"space-around",alignItems:"center"}}>
             <Link style={navItems} to="/home"><h3>Home</h3></Link>
      <Link  style={navItems} to="/aboutus" ><h3>About Us</h3></Link>
      <Link style={navItems} to="/todos"><h3>Todos</h3></Link>
        </div>
    

    </div>
  )
}
const navStyle ={
    width:"100%",
    backgroundColor:"white",
    height:"70px",
    display:"flex",
    justifyContent:"space-between",
    padding:"0 20px",
    position:"fixed",
    top:"0px"

}
const navItems={
    color:"black",

}

export default Navbar
