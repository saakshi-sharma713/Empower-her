import { supabase } from "../Config/supabase.config.js";
import bcrypt from "bcrypt"
export async function createUser(req,res){
    try{
       const {name,email,age,location,password} = req.body;
       if(!name,!email,!age,!location,!password){
        return res.status(400).json({
            status:false,
            message:"All Fields are Required"
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);
        const {data,error} = await supabase.from('users').insert([{name,email,age,location,password:hashedPassword}]).select()

        if(error){
            return res.status(400).json({
                error:error.message
            })
        }
        console.log("User Data",data)
        return res.json({
            message: "User registered successfully",
            user:data
        })
       
    }
    catch(error){
        console.log(error.message);
    }
   

}

export const fetchUser = async(req,res)=>{
    const {name} = req.query;
    const {data,error} = await supabase.from('users').select().eq("name",name);

    if(error){
        return res.status(400).json({status:false,
            message:error.message
        })
    }
 
    if(data.length==0){
        return res.status(404).json({message:"User not found"})
    }
    return res.json({
        message:"Fetched Data",
        data
    })
}