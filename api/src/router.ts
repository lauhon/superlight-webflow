import { FastifyInstance } from "fastify";
import inviteFriendsController from "./controller/invite-friends-controller";
import registerController from "./controller/register-controller";

export default async function router(fastify: FastifyInstance) {
  fastify.register(registerController, { prefix: "/api/v1/register" });
  fastify.register(inviteFriendsController, {
    prefix: "/api/v1/referralLink",
  });
  fastify.get("/", (_, res) => res.send("Hello, I am up!"));
}
