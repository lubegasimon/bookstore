import db from "../models/index";
export class Users {
  static signUp(req, res) {
    const { username, email, password } = req.body;
    return db.User.create({ username, email, password }).then(userData =>
      res.send({
        success: "OK",
        msg: "User is successfully created",
        userData
      })
    );
  }

  static async list(_req, res) {
    return await db.User.findAll().then(users => res.send(users));
  }
}
