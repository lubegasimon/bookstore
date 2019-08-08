// const model = require("../models");
import db from "../models/index";
// import { User } from "../models/user";

// const { User } = models;

export class Users {
  static async signUp(req, res) /*: Promise<User>*/ {
    const { username, email, password } = req.body;
    return await db.User.create({ username, email, password }).then(userData =>
      res.send({
        success: "OK",
        msg: "User is successfully created",
        userData
      })
    );
  }

  static list(_req, res) {
    return db.User.findAll().then(users => res.send(users));
  }
}
