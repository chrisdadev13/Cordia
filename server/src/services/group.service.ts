import { Request as Req, Response as Res } from "express";
import GroupModel from "../models/group.model";
import { TOKEN_KEY } from "../configs/constants";
import jwt from "jsonwebtoken";

export default class GroupService {
  static async createGroup(
    name: string,
    category: string,
    description: string,
    token: string
  ) {
    const group = new GroupModel({
      name,
      category,
      description,
    });

    try {
      const decoded = jwt.verify(token, TOKEN_KEY) as any;
      group.creator = decoded.username;

      await group.save();

      return {
        group,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
