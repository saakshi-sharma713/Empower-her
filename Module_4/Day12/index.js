import express from "express"
import { userRouter } from "./Routes/user.router.js";
const app = express();
const PORT=9000;
app.use(express.json());
app.use("/user",userRouter)
app.listen(PORT,()=>{
    console.log("Server Started Successfully");
})