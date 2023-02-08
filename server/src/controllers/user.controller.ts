import { Request as Req, Response as Res } from "express";
import UserService from "../services/user.service";

export default class UserController {
  static async register(req: Req, res: Res) {
    const { firstName, lastName, username, password } = req.body;
    const user = await UserService.register(
      firstName,
      lastName,
      username,
      password
    );

    res.json(user);
  }

  static async login(req: Req, res: Res) {
    const { username, password } = req.body;

    const user = await UserService.login(username, password);

    res.json(user);
  }

  static async getGroups(req: Req, res: Res) {
    const token = req.headers["x-access-token"];

    const groups = await UserService.getGroups(token as string);

    res.json(groups);
  }
}
