const express = require("express");
const _router = express.Router();
const fs = require("fs");
const path = require("path");


const data = JSON.parse(fs.readFileSync(path.join(__dirname, ".." ,"db.json"),"utf-8"));
let todosData = data.todos;

_router.post("/add",(req,res)=>{
    const {title} = req.body;
    const id = todosData.length > 0 ? todosData[todosData.length-1].id+1 : 1 ;
    if(!title){
        return res.json({message:"All Fields are Required"})
    }
    data.todos.push({id,title,status:"false"});
    
    
    fs.writeFileSync("db.json",JSON.stringify(data));
    return res.json({message:"Todo Added Successfully",data});
})

_router.get("/",(req,res)=>{
  const data = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db.json"),"utf-8"));
  const userData = data.todos;
    return res.json({message:"All Users ",userData})
})

_router.get("/:id",(req,res)=>{
  const {id} = req.params;
  const fetchedData = todosData.find((data)=> (data.id == id));
  if(fetchedData){
   return res.json(fetchedData);
  }
   
  return res.json({message:"User not found"});
})


_router.put("/update/:id",(req,res)=>{
    const {id} = req.params;
    const updatedData = todosData.map((data)=>(data.id == id ? {...data,...req.body} : data));
    todosData =updatedData
    data.todos = todosData;
     return res.json({message:"User Updated Successfully",data});
     
})

_router.delete("/delete/:id",(req,res)=>{
      const {id} = req.params;
      const updatedData = todosData.filter((data)=>(data.id != id ));
      todosData = updatedData;
      data.todos = todosData;
      fs.writeFileSync("db.json",JSON.stringify(data));
      return res.json({message:"User Deleted Successfully"});
})


module.exports = _router;