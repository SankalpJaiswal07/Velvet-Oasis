import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://izaelzkhdxcifogbojmv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YWVsemtoZHhjaWZvZ2Jvam12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNjEyNjksImV4cCI6MjAzMDczNzI2OX0.NatVIoYmmaN2JQ92_k0n8uS7ULe0zQweZw_FvCQ2kPs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
