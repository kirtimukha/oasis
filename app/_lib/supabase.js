import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL; //"https://pfnnadfhnpnfrwmpcfdx.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
