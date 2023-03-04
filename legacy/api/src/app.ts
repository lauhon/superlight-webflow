import fastify from "fastify";
import logger from "./logger";
import router from "./router";

const server = fastify({
  logger,
});

// Middleware: Router
server.register(router);

export default server;
