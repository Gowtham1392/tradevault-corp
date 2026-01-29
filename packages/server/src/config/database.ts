import path from "node:path";
import { fileURLToPath } from "node:url";
import { Sequelize } from "sequelize";

type SupportedDialect = "sqlite";

/**
 * Resolve a stable SQLite storage path relative to this file location.
 * This avoids relying on process.cwd() which can vary in workspaces.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.resolve(__dirname, "../../database.sqlite");

const rawDialect = (process.env.DB_DIALECT || "sqlite").toLowerCase();

if (rawDialect !== "sqlite") {
  // Corporate-rigor: fail fast with a clear message.
  throw new Error(
    `Unsupported DB_DIALECT="${process.env.DB_DIALECT}". For Ticket #003 we only support "sqlite".`
  );
}

const dialect: SupportedDialect = "sqlite";

export const sequelize = new Sequelize({
  dialect,
  storage: storagePath,
  logging: false
});
