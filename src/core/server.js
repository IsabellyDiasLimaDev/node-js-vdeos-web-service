import { fastify } from "fastify";
import { videoRoutesSetup } from "../application/routes/videoRoutes.js";

const server = fastify();

videoRoutesSetup(server);

server.listen({
    port: 3333
});