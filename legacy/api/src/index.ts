import cors from "@fastify/cors";
import app from "./app";
import config from "./config";
import logger from "./logger";

app.register(cors, {
  origin: config.validHost,
  methods: ["POST", "GET"],
});

app.listen({ port: config.port, path: config.host });

logger.info(`🚀  Fastify server running on  ${config.host}:${config.port}`);
logger.info(`Route user: /api/v1/register`);
logger.info({ config });
