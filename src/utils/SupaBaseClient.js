// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fgxwrwlrhvqdgqeqhiia.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZneHdyd2xyaHZxZGdxZXFoaWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NTQ0NzcsImV4cCI6MjA4MDUzMDQ3N30.xxGB4NSfxvuj6_n-wMjBdRM3qPET8xFO63iAS8ESy2U"
export const supabase = createClient(supabaseUrl, supabaseKey);
