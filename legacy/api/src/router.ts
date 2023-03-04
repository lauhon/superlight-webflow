import { FastifyInstance } from "fastify";
import registerController from "./controller/register-controller";

export default async function router(fastify: FastifyInstance) {
  fastify.register(registerController, { prefix: "/api/v1/register" });
  fastify.get("/", (_, res) => res.send("Hello, I am up!"));
}
