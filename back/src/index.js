import { connectDb } from "./database.js";
import Fastify from "fastify";
import cors from "@fastify/cors";
import formbody from "@fastify/formbody";
import { noteRoutes } from "./routes/note.routes.js";
import fastifyEnv from "@fastify/env";
import { optionsEnv } from "./configEnv.js";

const fastify = Fastify({
  logger: true,
});



fastify.register(fastifyEnv, optionsEnv).ready((err) => {
  if (err) console.error(err);

  // console.log(fastify.config);
});

fastify.register(connectDb);
fastify.register(cors, { origin: "*" });
fastify.register(formbody);

//ROUTES
fastify.register(noteRoutes, { prefix: "/note" });

const start = async () => {
  try {
    await fastify.ready()
    fastify.listen({ port: process.env.PORT, host: process.env.HOST });
    console.log("server escuchando por el puerto",process.env.PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
