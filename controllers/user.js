const model = require("../models");

const { User } = model;

class Users {
  static signUp(req, res) {
    const { username, email, password } = req.body;
    User.create({ username, email, password }).then(userData =>
      res.send({
        success: "OK",
        msg: "User is successfully created",
        userData
      })
    );
  }

  static list(_req, res) {
    return User.findAll().then(users => res.send(users));
  }
}

module.exports = Users;
