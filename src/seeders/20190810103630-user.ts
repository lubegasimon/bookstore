import { QueryInterface } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, _Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "lubegasimon",
          email: "monzilla20@gmail.com",
          password: "...."
        }
      ],
      {}
    );
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
