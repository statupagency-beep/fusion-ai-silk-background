import { drizzle } from 'drizzle-orm/neon-serverless';
import { Pool } from '@neondatabase/serverless';
import * as schema from '@/db/schema';

const pool = new Pool({
  connectionString: process.env.SUPABASE_DATABASE_URL!,
});

export const db = drizzle(pool, { schema });

export type Database = typeof db;