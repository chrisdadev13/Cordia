import { Request as Req, Response as Res } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model";
import Jwt from "../utils/jwt";
import { TOKEN_KEY } from "../configs/constants";

export default class UserService {
  static async register(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    group: string
  ) {
    const doesExist = Boolean(await UserModel.findOne({ username: username }));
    if (doesExist) throw new Error("Username is already taken");

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      firstName,
      lastName,
      username,
      password: encryptedPassword,
      group,
    });

    await user.save();

    return {
      user,
    };
  }

  static async login(username: string, password: string) {
    const user = await UserModel.findOne({ username: username });

    const validPassword =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && validPassword)) {
      return {
        message: "Invalid username or password",
      };
    }

    const token = Jwt.signAccess(user._id, user.username);

    user.tokens = [...user.tokens, token];

    return {
      user,
    };
  }
}
