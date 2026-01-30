import { supabase } from "../Config/supabase.config.js";


export const createUser = async(req,res)=>{
  const{name,email,password} = req.body;
  if(!name||!email||!password) return res.json({message:"All Fields are required"})
  const {data,error} = await supabase.from('users').insert([{name,email,password}]).select();
  if(error){
    return res.json({error:error.message})
  }
  return res.json({message:"SignUp Successfull",data})
}