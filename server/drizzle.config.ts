/// <reference types="node" />

import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';

dotenv.config({path: "./config.env"});


export default defineConfig({
    dialect: "postgresql",
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
      url: process.env.DATABASE_URL!
    },
    verbose: true,
});
