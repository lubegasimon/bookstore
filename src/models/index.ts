/**
 * Model loader file: To export an object(database) with all models available
 */

import { Sequelize, DataTypes } from "sequelize";
import initUser from "./user";

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db: any = {
  sequelize,
  Sequelize,
  User: initUser(sequelize, DataTypes)
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

export default db;
