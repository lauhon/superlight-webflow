import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  acceptInvitation,
  getInvitationLink,
} from "../service/invite-friends-service";

export default async function inviteFriendsController(
  fastify: FastifyInstance
) {
  fastify.post(
    "/",
    // { constraints: { host: config.validHost } },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const { email } = _request.body as any;
      const response = await getInvitationLink(email);

      return reply.status(response.status).send(response);
    }
  );
  fastify.post(
    "/accepted",
    // { constraints: { host: config.validHost } },
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const { email, invitedFrom } = _request.body as any;
      const response = await acceptInvitation(email, invitedFrom);

      return reply.status(response.status).send(response);
    }
  );
}
