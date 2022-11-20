import cors from "@fastify/cors";
import env from "@fastify/env";
import jwt from "@fastify/jwt";
import Fastify from "fastify";

const EnvSchema = {
        type: "object",
        required: ["JWT_SECRET"],
        properties: {
          JWT_SECRET: {
            type: "string",
          },
        },
    }

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(env, {
    dotenv: true,
    schema: EnvSchema,
  });

  await fastify.register(jwt, {
    secret: "batata",
  });

  //Em producao o secret precisa ser uma variavel ambiente

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
