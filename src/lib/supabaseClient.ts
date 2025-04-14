import { createClient } from '@supabase/supabase-js'

// Use environment variables in a real application
const supabaseUrl = 'https://tamfudvevdvygetqmttr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhbWZ1ZHZldmR2eWdldHFtdHRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NDc5OTgsImV4cCI6MjA2MDIyMzk5OH0.scBT7k3Z6MG-x5_JiTgxytyNNnNwAfcNggG6CQMK8D4'

// It's better practice to store these in environment variables (.env.local)
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)