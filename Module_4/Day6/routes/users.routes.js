const express = require("express");
const _router = express.Router();
const fs = require("fs");
const path = require("path");


const data = JSON.parse(fs.readFileSync(path.join(__dirname, ".." ,"db.json"),"utf-8"));
let userData = data.users;
_router.post("/add", (req, res) => {
 
  const { name, email } = req.body;
 
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const dbPath = path.join(__dirname, "..", "db.json");
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
   const id = data.users[data.users.length-1].id+1
  data.users.push({ id,name, email });
  fs.writeFileSync(dbPath, JSON.stringify(data));

  res.json({ message: "Data Inserted Successfully", users: data.users });
});


_router.get("/",(req,res)=>{
  const data = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db.json"),"utf-8"));
  const userData = data.users;
    return res.json({message:"All Users ",userData})
})

_router.get("/:id",(req,res)=>{
  const {id} = req.params;
  const fetchedData = userData.find((data)=> (data.id == id));
  if(fetchedData){
   return res.json(fetchedData);
  }
   
  return res.json({message:"User not found"});
})



_router.put("/:id",(req,res)=>{
    const {id} = req.params;
    const updatedData = userData.map((data)=>(data.id == id ? {...data,...req.body} : data));
    userData =updatedData
    data.users = userData;
     return res.json({message:"User Updated Successfully",data});
     
})

_router.delete("/:id",(req,res)=>{
      const {id} = req.params;
      const updatedData = userData.filter((data)=>(data.id != id ));
      userData = updatedData;
          data.users = userData;
      fs.writeFileSync("db.json",JSON.stringify(data));
      return res.json({message:"User Deleted Successfully"});
})
module.exports = _router;
