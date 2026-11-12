import dotenv from 'dotenv';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({ path: "./config.env" });

const migrationsClient = postgres(
  process.env.DATABASE_URL!,
  { max: 1 }
);

async function main() {
    await migrate(drizzle({client: migrationsClient}), {
        migrationsFolder: './src/drizzle/migrations',
    })

    await migrationsClient.end();
}

main()