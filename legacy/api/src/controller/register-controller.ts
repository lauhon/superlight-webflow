import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { addContact } from "../service/register-service";

export default async function registerController(fastify: FastifyInstance) {
  fastify.post(
    "/",
    // { constraints: { host: config.validHost } },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const { Email } = _request.body as any;

      const response = await addContact(Email);

      return reply.status(response.status).send(response);
    }
  );
}
