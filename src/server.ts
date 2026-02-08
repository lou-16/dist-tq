// src/server.ts

import fastify from "fastify";
import { checkConnection } from "./db/pool.js";


const app = fastify({ logger : true })
await checkConnection();

app.get("/health", async () => {
    return ({ok : true})
})

await app.listen({port: 3000,});