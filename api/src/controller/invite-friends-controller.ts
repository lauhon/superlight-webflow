import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getInvitationLink } from "../service/invite-friends-service";

export default async function inviteFriendsController(
  fastify: FastifyInstance
) {
  fastify.get(
    "/",
    // { constraints: { host: config.validHost } },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const { email } = _request.query as any;
      const response = await getInvitationLink(email);

      return reply.status(response.status).send(response);
    }
  );
}
