const express = require("express");
const orderRouter = require("./Routes/orders.routes.js");
const analyticsRouter = require("./Routes/analytics.routes.js");
const PORT = 8000;
const app = express();

app.use(express.json());

app.use("/orders",orderRouter);
app.use("/analytics",analyticsRouter);
console.log(Date)
app.listen(PORT,()=>{
    console.log("Server Started Successfully");
})