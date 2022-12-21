import app from "./app";
import config from "./config";

app.listen({ port: config.port, path: config.host });

console.log(`🚀  Fastify server running on  ${config.host}:${config.port}`);
console.log(`Route user: /api/v1/register`);
