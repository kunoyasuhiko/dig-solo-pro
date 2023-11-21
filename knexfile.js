require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      user: process.env.POSTGRES_USER || "postgres",
      // user: process.env.POSTGRES_USER || "user",
      database: process.env.POSTGRES_DB || "solodb",
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
  },
};
