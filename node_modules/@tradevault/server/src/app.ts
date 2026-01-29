import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";

/**
 * Builds and configures a Fastify instance.
 * Exported as a function to keep it testable and to separate "setup" from "listen".
 */
export async function buildApp(): Promise<FastifyInstance> {
  const app: FastifyInstance = Fastify({
    logger: true
  });

  // Dev CORS: allow all origins
  await app.register(cors, {
    origin: true
  });

  app.get("/health", async () => {
    return {
      status: "ok",
      timestamp: new Date().toISOString()
    };
  });

  return app;
}
