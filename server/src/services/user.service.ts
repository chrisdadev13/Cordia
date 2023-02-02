import { Request as Req, Response as Res } from "express";
import { ObjectId } from "mongoose";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model";
import Jwt from "../utils/jwt";

export default class UserService {
  static async register(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    group: string
  ) {
    const doesExist = await UserModel.findOne({ username: username });

    if (doesExist) throw new Error("Username is already taken");

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: encryptedPassword,
      group: group,
    });

    const accessToken = Jwt.signAccess(user._id, user.username);

    await user.save();

    return {
      user: user,
      token: accessToken,
    };
  }

  static async login(username: string, password: string) {
    const user = await UserModel.findOne({ username: username });
    const validPassword = async (password: string, userPassword: string) =>
      await bcrypt.compare(password, userPassword);

    if (user && validPassword(password, user.password)) {
      const accessToken = Jwt.signAccess(user._id, user.username);
      return {
        user: user,
        token: accessToken,
      };
    }
  }
}
