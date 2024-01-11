import { fastify } from "fastify";
import { videoRoutesSetup } from "../application/routes/videoRoutes.js";
import { corsConfig } from "./config/corsConfig.js";

const server = fastify();

videoRoutesSetup(server);
corsConfig(server);

server.listen({
    port: process.env.PORT || 3333
}, console.log(process.env?.PORT));