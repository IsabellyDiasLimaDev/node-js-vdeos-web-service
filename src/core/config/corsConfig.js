import fastifyCors from "@fastify/cors";

export function corsConfig(server){
    server.register(fastifyCors, {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: '*'
      });
}