import jwt from "jsonwebtoken";
import mongoose, { ObjectId } from "mongoose";
import { TOKEN_KEY } from "../configs/constants";

export default class Jwt {
  static signAccess(id: mongoose.Types.ObjectId, username: string) {
    const userForToken = {
      username: username,
      id: id,
    };
    return jwt.sign(userForToken, TOKEN_KEY);
  }
}
