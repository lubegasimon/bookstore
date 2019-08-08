import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

interface UserAttributes {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface UserModel extends Model<UserAttributes> {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}

// declaring a static model / interface on which we can call methods like findAll() e.t.c
type StaticModel = typeof Model & {
  new (values?: UserAttributes, options?: BuildOptions): UserModel;
  associate?(model: Model): void;
};

export default (sequelize: Sequelize) => {
  const User = <StaticModel>sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(_models) {
    // associations can be defined here
  };
  return User;
};
