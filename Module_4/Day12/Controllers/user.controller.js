import { supabase } from "../config/supabase.config.js";

export const createUser = async(req,res)=>{
    const {name,email,password,age} = req.body;
    if (!name || !email || !password || password.length < 8 || !age) {
  return res.status(400).json({ message: "Invalid input" });
}

    const {data,error} = await supabase.from('users').insert([{name,email,password,age}]).select();
    if(error) return res.json({message:"Failed to create user" ,error: error.message})
        return res.json({message:"User created Successfully",data})
}

export const getUsers = async(req,res)=>{
    try{
     const {data,error} = await supabase.from('users').select("*");
     if(error) return res.json({message:error})
        return res.json({message:"All users",data});
    }
    catch(err){
        console.log(err);
    }
    
}

export const getUser = async(req,res)=>{
    try{
        const {id} = req.params;
     const {data,error} = await supabase.from('users').select("*").eq("id",id);
     if(error) return res.json({message:error})
        return res.json({data});
    }
    catch(err){
        console.log(err);
    }
    
}

export const updateUser = async(req,res)=>{
    try{
        const {id} = req.params;
         const {name,email,password,age} = req.body;
     const {data,error} = await supabase.from('users').update({name,email,password,age}).eq("id",id).select();
     if(error) return res.json({message:error})
        return res.json({message:"User Updated Successfully",data});
    }
    catch(err){
        console.log(err);
    }
    
}

export const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
     const {data,error} = await supabase.from('users').delete().eq("id",id);
     if(error) return res.json({message:error})
        return res.json({message:"User Deleted Successfully"});
    }
    catch(err){
        console.log(err);
    }
    
}