import { supabase } from "../Config/supabase.config.js";

export async function dbHealthCheck(){
    const {error} = await supabase.from('users').select("id").limit(1);
    if(error){
        return false;
    }
    console.log("DB CONNECTED SUCCCESSFULLY")
    return true;
}