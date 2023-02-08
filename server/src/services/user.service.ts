import jwt from "jsonwebtoken";
import GroupService from "./group.service";
import bcrypt from "bcrypt";
import UserModel from "../models/user.model";
import Jwt from "../utils/jwt";
import { TOKEN_KEY } from "../configs/constants";

export default class UserService {
  static async register(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    const doesExist = Boolean(await UserModel.findOne({ username: username }));
    if (doesExist) return { message: "Username is already taken" };

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      firstName,
      lastName,
      username,
      password: encryptedPassword,
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
      return "Invalid username or password";
    }

    const token = Jwt.signAccess(user._id, user.username);

    user.tokens = [...user.tokens, token];

    return {
      user,
    };
  }

  static async getGroups(token: string) {
    try {
      const decoded = jwt.verify(token, TOKEN_KEY) as any;
      const user = await UserModel.findById(decoded.id);

      let groups: any[] = [];

      if (decoded) {
        for (let i = 0; i < user.groups.length; i++) {
          const group = await GroupService.getGroup(user.groups[i], token);
          groups = [...groups, group];
        }

        return groups;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
