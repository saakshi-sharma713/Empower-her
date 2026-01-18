const express = require("express");
const fs = require("fs");
const path = require("path");

const _router = express.Router();
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db.json"),"utf-8"));
    const orders = data.orders;
    const products = data.products;

_router.get("/allorders",(req,res)=>{
    let count=0;
     const fetchedData =  orders.map((data)=>{
        count++;
        return data;
       })

      return res.json({totalOrders:count,fetchedData});
})

_router.get("/cancelled-orders",(req,res)=>{
   
     const fetchedData =  orders.filter((data)=>{
        if(data.status == "cancelled"){
            return data
        }
       })

      return res.json({message:"Cancelled Orders" ,fetchedData});
})


_router.get("/shipped",(req,res)=>{
    let count=0;
     const fetchedData =  orders.filter((data)=>{
        if(data.status == "shipped"){
         count++;
        return data;
        }
       
       })

      return res.json({"No of Orders Shipped":count,fetchedData});
})


module.exports = _router;