const Users = require("../controllers/user");

module.exports = app => {
  app.get("/", (_req, res) => {
    res.send("Welcome to bookstore");
  });
  app.get("/users", Users.list);
  app.post("/signUp", Users.signUp);
};
