import dotenv from "dotenv"
import { createClient } from "@supabase/supabase-js/dist/index.cjs";
dotenv.config()
export const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_SECRET_KEY)

