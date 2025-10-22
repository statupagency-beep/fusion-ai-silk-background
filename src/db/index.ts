import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Create postgres client for Supabase
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:givhvy123@db.cxydsqfuzzocqjyemrbm.supabase.co:5432/postgres';

const client = postgres(connectionString, { 
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10,
});

// Initialize drizzle with postgres client
export const db = drizzle(client, { schema });