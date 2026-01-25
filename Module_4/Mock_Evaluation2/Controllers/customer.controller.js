
import { supabase } from "../Config/supabase.config.js";
export async function createUser(req,res){
    try{
    const {full_name,email,phone} = req.body;
    if(!full_name|| !email||!phone)
        return res.json({message:"All fields are required"});
    const {data} = await supabase.from('customers').select().eq("email",email).limit(1);
    if(data.length != 0){console.log(data)
        return res.json({message:"Email Already Exist"})}
    const {abc,error} = await supabase.from('customers').insert([{full_name,email,phone}]).select();

    if(error) return res.json({message:"Failed to create user"});
    return res.json({message:"User Created Successfully",abc});
}
catch(err){
    console.log(err.message);
}
}

export const createOrder = async(req,res)=>{
    const {product_name,quantity,price,customer_id} = req.body;
   const {abc,error}  = await supabase.from('orders').insert([{product_name,quantity,price,customer_id}]).select();
    if(error) return res.json({message:"Failed to create order"})
   return res.json({message:"Order Created Successfully",abc});
}

export const getOrder = async(req,res)=>{
    const {customerId} = req.params;
     const {data,error} = await supabase.from('orders').select().eq("customer_id",customerId);
     console.log(data)
  return  res.json({orders:data})
}