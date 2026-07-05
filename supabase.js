import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://tyjwvpuyqztslrnloujj.supabase.co";
const supabaseAnonKey = "sb_publishable_4mJ9wxCmf_dPwK_ejkM04Q_cUDVwrEV";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
