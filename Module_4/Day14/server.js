import express from "express"
import dotenv from "dotenv"
dotenv.config();
import { dbHealthCheck } from "./utils/dbHealthCheck.js";
import userRouter from "./routes/user.route.js";
const app = express();
const PORT=9908;
app.use(express.json())
app.use("/user",userRouter)
app.listen(PORT,()=>{
    const status = dbHealthCheck()
    try{
       if(status){
     console.log(`Server Started SuccessFully at PORT: ${PORT}`)
    }
    }
    catch(error){
        console.log(error.message);
    }
   
    
})