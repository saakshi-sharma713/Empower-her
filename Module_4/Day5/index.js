import express from "express"
import fs from "fs"
const app = express();
const PORT=8000;
app.use(express.json());

app.get("/students",(req,res)=>{
  const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
  console.log(data);
  res.json(data.students)
})

app.post("/students",(req,res)=>{
    const parsedData =  JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const studentsData = parsedData.students;
    const {name,course,year} = req.body;
    const newStudent = {id:studentsData[studentsData.length-1].id+1 ,name,course,year };
    studentsData.push(newStudent);
    fs.writeFileSync("db.json",JSON.stringify(parsedData));
    console.log(parsedData);
    res.json(parsedData);
});

app.put("/students/:id",(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
     const parsedData =  JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const studentsData = parsedData.students;
   const updatedData = studentsData.map((data)=> (data.id == id ? {...data, name} : data));
      parsedData.students= updatedData;
   fs.writeFileSync("db.json",JSON.stringify(parsedData));
   console.log(parsedData);
    res.json(parsedData);
})

app.delete("/students/:id",(req,res)=>{
    const {id} = req.params;
     const parsedData =  JSON.parse(fs.readFileSync("./db.json","utf-8"));
    const studentsData = parsedData.students;
    const filteredData = studentsData.filter((data)=> data.id != id);
 
  
     if(filteredData.length == studentsData.length){
        return res.json({message:"Data not defined"});
     }
    parsedData.students= filteredData;
    fs.writeFileSync("db.json",JSON.stringify(parsedData));
    console.log(parsedData);
    res.json(parsedData);
})
app.listen(PORT,()=>{
    console.log("Server Started Successfully :)")
});