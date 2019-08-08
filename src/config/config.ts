const dotenv = require("dotenv");

dotenv.config();

export = {
  development: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
