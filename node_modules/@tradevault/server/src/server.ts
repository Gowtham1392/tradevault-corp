import "dotenv/config";
import { buildApp } from "./app.js";
import { sequelize } from "./config/database.js";

function getPort(): number {
  const raw = process.env.PORT ?? "4000";
  const parsed = Number(raw);

  if (!Number.isInteger(parsed) || parsed <= 0 || parsed > 65535) {
    throw new Error(`Invalid PORT="${raw}". Expected an integer between 1 and 65535.`);
  }

  return parsed;
}

async function start(): Promise<void> {
  const port = getPort();

  // DB init / connectivity check
  await sequelize.authenticate();

  const app = await buildApp();

  try {
    await app.listen({ port, host: "0.0.0.0" });
    app.log.info(`Server listening on port ${port}`);
  } catch (err) {
    app.log.error({ err }, "Failed to start server");
    process.exit(1);
  }
}

start().catch((err) => {
  // Last-resort catch to avoid silent failures.
  // eslint-disable-next-line no-console
  console.error("Fatal startup error:", err);
  process.exit(1);
});
