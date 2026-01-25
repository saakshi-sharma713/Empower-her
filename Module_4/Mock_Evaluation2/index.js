import express from 'express'
import customerRouter from './Routes/CustomerRouter.js';

const app = express();
const PORT=8000;
app.use(express.json())
app.use("/customers",customerRouter);
app.listen(PORT,()=>{
    console.log("Server Started Successfully");
})