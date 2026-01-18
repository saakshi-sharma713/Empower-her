const express = require("express");
const fs = require("fs");
const path = require("path");

const _router = express.Router();
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db.json"),"utf-8"));
    const orders = data.orders;
    const products = data.products;


// Create Order
_router.post("/",(req,res)=>{
    const {productId,quantity} = req.body;
    const fetchedData = products.find((data)=>(data.id == productId));
 
    if(fetchedData){
     if(fetchedData.stock != 0 && fetchedData.stock > quantity){
     const id = orders[orders.length-1].id+1;
     const totalAmount = fetchedData.price * Number(quantity); 
      orders.push({id,productId,quantity,totalAmount,status:"placed",createdAt: "2026-01-18"});
      fetchedData.stock = fetchedData.stock - quantity;
      data.orders = orders;
      data.products = products;
      fs.writeFileSync("db.json",JSON.stringify(data));

      return res.json({message :"Order Created Successfully"})
    }
    else{
        return res.status(400).json({message:"Insufficent Stock"})
    }
    }

    return res.status(404).json({message:"Product Not Found"})
    
})



_router.get("/",(req,res)=>{
    return res.json({message:"All Orders",orders})
})

_router.delete("/:id",(req,res)=>{
    const {id} = req.params;
    const fetchedOrder = orders.filter((data)=>(data.id == id));
    const fetchedProduct = orders.filter((data)=>(data.id == id));

    if(fetchedOrder && fetchedProduct){
       if(fetchedOrder.status != "cancelled"  && fetchedOrder.date == Date){
        fetchedOrder.status = "cancelled";
        fetchedProduct.stock = fetchedProduct.stock + fetchedOrder.quantity;
        return res.json({message:"Order cancelled"});
    }
    else{
        return res.status(400).json({message:"Order is Already Cancelled"})
    }
    }
    
    return res.status(404).json({message : "Product not Found"});

})

module.exports = _router;