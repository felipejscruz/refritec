import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://tyjwvpuyqztslrnloujj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5and2cHV5cXp0c2xybmxvdWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNzAyMTMsImV4cCI6MjA5ODY0NjIxM30.8HEhgO68j9zb_xQ-VSOYmwzNS6uyb0ZTf1v4Wy_yZW4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
