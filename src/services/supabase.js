import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ysvypvjfaqtqyscplejj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdnlwdmpmYXF0cXlzY3BsZWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1NzU3MjksImV4cCI6MjAzODE1MTcyOX0.raBz5GSoUakG9Je_Yn2F091j-VNtZzzlX6dVh-huXSA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
