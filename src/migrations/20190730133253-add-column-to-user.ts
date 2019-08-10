import { QueryInterface, DataTypes } from "sequelize";

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.addColumn(
        "Users",
        "confirmPassword",
        { type: DataTypes.STRING },
        { transaction: t }
      );
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.removeColumn("Users", "confirmPassword", {
        transaction: t
      });
    });
  }
};
