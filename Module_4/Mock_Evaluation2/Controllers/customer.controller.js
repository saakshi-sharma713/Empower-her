
import { supabase } from "../Config/supabase.config.js";
export async function createUser(req,res){
    try{
    const {full_name,email,phone} = req.body;
    if(!full_name|| !email||!phone)
        return res.json({message:"All fields are required"});
    const {data : existing} = await supabase.from('customers').select().eq("email",email);
    if(existing)
        return res.json({message:"Email Already Exist"})
    const {data,error} = await supabase.from('customers').insert([{full_name,email,phone}]);

    if(error) return res.json({message:"Failed to create user"});
    return res.json({message:"User Created Successfully"});
}
catch(err){
    console.log(err.message);
}
}