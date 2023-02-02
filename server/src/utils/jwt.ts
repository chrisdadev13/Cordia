import jwt from "jsonwebtoken";
import mongoose, { ObjectId } from "mongoose";
import { TOKEN_KEY } from "../configs/constants";

export default class Jwt {
  static signAccess(id: mongoose.Types.ObjectId, username: string) {
    jwt.sign({ id: id, username }, TOKEN_KEY, {
      expiresIn: "2h",
    });
  }
}
