import { Request as Req, Response as Res } from "express";
import GroupService from "../services/group.service";

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
  static async joinGroup(req: Req, res: Res) {
    const { invitation, token } = req.body;
    const group = await GroupService.joinGroup(invitation, token);

    res.json(group);
  }

  static async getGroup(req: Req, res: Res) {
    const { invitation, token } = req.params;
    const group = await GroupService.getGroup(invitation, token);

    res.json(group);
  }
}
