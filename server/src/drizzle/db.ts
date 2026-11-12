import { drizzle } from "drizzle-orm/postgres-js"
import dotenv from 'dotenv';

dotenv.config({ path: "./config.env" });

export const db = drizzle(process.env.DATABASE_URL!, { logger: true });