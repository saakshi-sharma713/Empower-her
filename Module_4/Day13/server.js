import express from "express"
import  userRouter  from "./routes/user.route.js";
import todoRouter from "./routes/todo.route.js";
const app = express();
const PORT=8990;
app.use(express.json())
app.use("/users",userRouter)
app.use("/todos",todoRouter)
app.listen(PORT,()=>{
    console.log("Server Started Successfully at 8990 :)")
})