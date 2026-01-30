import { supabase } from "../Config/supabase.config.js";

export const addTodo = async(req,res)=>{
    const{title,description,user_id} = req.body;
    if(!title||!user_id) return res.json({message:"All Fields are required"});
    const{data,error} = await supabase.from('todos').insert([{title,description,user_id}]).select();
    if(error) return res.json({error:error.message});
    return res.json({message:"Todo Added Successfully :)",data})
}

export const fetchUserTodo = async(req,res)=>{
    const{userId}=req.params;
    const{data,error} = await supabase.from('todos').select().eq("user_id",userId)
    if(error){
        return res.json({error:error.message});
    }
    return res.json({message:"User Found :)",data})
}

export const updateTodo = async(req,res)=>{
    const{todoId} = req.params;
    const{title,description,is_completed} = req.body;
    if(!todoId){
        return res.json({message:"Todo Id is required"})
    }

    const{data,error} = await supabase.from('todos').update([{title,description,is_completed}]).eq("id",todoId).select();
    if(error){
        return res.json({error:error.message});
    }
    if(data.length===0){
        return res.json({error:"Todo Not Found"})
    }
    return res.json({message:"Data Updated Successfully :)",todo:data[0]})

}

export const deleteTodo = async(req,res)=>{
    const{todoId} = req.params;
    if(!todoId){
        return res.json({error:error.message})
    }
    const {error} = await supabase.from('todos').delete().eq("id",todoId);
    if(error){
        return res.json({message:error.message})
    }
    return res.json({message:"Todo Deleted Successfully :)"})
}