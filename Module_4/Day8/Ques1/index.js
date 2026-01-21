import express from 'express'
import TodoRouter from './Routes/Todo.Routes.js';
const app = express();
const PORT=9000;
app.use(express.json())
app.use("/todos",TodoRouter)

app.listen(PORT,()=>{
console.log("Server Started Successfully")
})