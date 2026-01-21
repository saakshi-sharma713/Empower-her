import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "db.json");


const readTodos = () => {
  return  JSON.parse(fs.readFileSync(dbPath,"utf-8"));
};
let  data = readTodos();
let todos = data.todos

export const getTodo = (req,res)=>{
   
    return res.json(todos);
}

export const addTodo = (req,res)=>{
    try{
        const {title}=req.body;
        if(!title) return res.json({message:"Title is required"});
        const id= todos[todos.length-1].id+1
        todos.push({id,title,status:false});
         fs.writeFileSync(dbPath, JSON.stringify(data));
         console.log(todos)
         return res.json({message:"Todo added Successfully",data});
    }
    catch(err){
        console.log(err);
    }
}

export const upDateTodo = (req,res)=>{
    try{
        const {id} = req.params;
       const {title,status} = req.body;
       if(!title || !status) return res.json({message:"All Fields are Required"})
       const updatedData = todos.map((data)=>(data.id == id ? {...data,title,status} : data))
       data.todos=updatedData;
        fs.writeFileSync(dbPath, JSON.stringify(data));
        return res.json({message:"Todo Updated Successfully",data});
    }
    catch(err){
        console.log(err);
    }
}

export const deleteTodo = (req,res)=>{
    const {id} = req.params;
    const updatedData = todos.filter((todo)=> (todo.id != id))
    data.todos=updatedData;
     fs.writeFileSync(dbPath, JSON.stringify(data));
     return res.json({message:"Todo Deleted Successfully",data});
}

