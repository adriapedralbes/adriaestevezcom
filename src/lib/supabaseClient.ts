import { createClient } from '@supabase/supabase-js'

// Verificar si estamos en el lado del cliente (browser)
const isBrowser = typeof window !== 'undefined'

// Una implementación de seguridad para evitar errores durante la compilación SSR
let supabase: ReturnType<typeof createClient> | null = null

// Inicializar el cliente de Supabase solo en el cliente
if (isBrowser) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  // Comprobar si las variables están definidas
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      'Supabase URL or Anon Key missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.'
    )
  } else {
    // Inicializar el cliente de Supabase
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
}

// Exportar un cliente que verifica si está en el cliente o no
export { supabase }