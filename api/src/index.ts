import app from "./app";
const FASTIFY_PORT = Number(process.env.PORT) || 3006;

app.listen(FASTIFY_PORT);

console.log(`🚀  Fastify server running on port ${FASTIFY_PORT}`);
console.log(`Route user: /api/v1/register`);
