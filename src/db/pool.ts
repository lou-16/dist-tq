import { Pool, type QueryResult } from "pg";

const pool = new Pool({
    user: "distributedtaskq",
    host: process.env.PG_HOST_URL,
    database: "distributedtaskq",
    port: 5432,
    password: process.env.PG_DB_PASSWORD
});
export const checkConnection = async () : Promise<void> => {
    console.log("[pool.ts] checking connection");
    try {
        const results : QueryResult = await pool.query("SELECT 1"); 
    } catch (err)
    {
        console.error("[pool.ts] failed to connect");
    }
    finally {
        console.log("[pool.ts] connection successful")
    }
}