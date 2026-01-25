
import { supabase } from "../Config/supabase.config.js";
export async function createUser(req,res){
    try{
    const {full_name,email,phone} = req.body;
    if(!full_name|| !email||!phone)
        return res.json({message:"All fields are required"});
    const {data : existing} = await supabase.from('customers').select().eq("email",email);
    if(existing){console.log(existing)
        return res.json({message:"Email Already Exist"})}
    const {data} = await supabase.from('customers').insert([{full_name,email,phone}]).select();

    if(error) return res.json({message:"Failed to create user"});
    return res.json({message:"User Created Successfully",data});
}
catch(err){
    console.log(err.message);
}
}

export const createOrder =(req,res)=>{
    const {product_name,quantity,price,customer_id} = req.body;
   const {data,error}  = supabase.from('orders').insert([{product_name,quantity,price,customer_id}]).select();
    if(error) return res.json({message:"Failed to create order"})
   return res.json({message:"User Created Successfully",data});
}