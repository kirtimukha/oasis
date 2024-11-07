import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL; //"https://pfnnadfhnpnfrwmpcfdx.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error('Supabase URL 또는 키가 설정되지 않았습니다.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
