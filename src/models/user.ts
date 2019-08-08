import { BuildOptions, Model, Sequelize } from "sequelize";

export interface UserAttributes {
  id?: number;
  username: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

interface UserModel extends Model {
  id?: number;
  username: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

// declaring a static model on which we can call methods like findAll() e.t.c
type StaticModel = typeof Model & {
  new (values?: UserAttributes, options?: BuildOptions): UserModel;
  associate?(model: Model): void;
};

export default function initUser(sequelize: Sequelize, dataTypes) {
  const userAttrs: SequelizeAttributes<UserAttributes> = {
    username: dataTypes.STRING,
    email: dataTypes.STRING,
    password: dataTypes.STRING
  };
  const User = <StaticModel>sequelize.define("User", userAttrs, {});
  User.associate = function(_models) {
    // associations can be defined here
  };
  return User;
}
