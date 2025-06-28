
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fxwnvamhdvncstqwsrtw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4d252YW1oZHZuY3N0cXdzcnR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExMjIxNzIsImV4cCI6MjA2NjY5ODE3Mn0.tpo3nQwQLXYY3yWK4KaceRByMR3gDFhxoPdcxGPbxss'
export const supabase = createClient(supabaseUrl, supabaseKey)