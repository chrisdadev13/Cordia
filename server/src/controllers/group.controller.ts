import { Request as Req, Response as Res } from "express";
import GroupModel from "../models/group.model";
import GroupService from "../services/group.service";
import jwt from "jsonwebtoken";

export default class GroupController {
  static async createGroup(req: Req, res: Res) {
    const { name, category, description, token } = req.body;
    const group = await GroupService.createGroup(
      name,
      category,
      description,
      token
    );
    res.json({ group });
  }
}
