import GroupModel from "../models/group.model";
import { Schema } from "mongoose";
import { TOKEN_KEY } from "../configs/constants";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";

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

  static async joinGroup(id: string, token: string) {
    const doesExist = Boolean(await GroupModel.findById(id));
    if (!doesExist) return { message: "The provided group id, doesnt exist" };

    const groupDB = await GroupModel.findById(id);

    try {
      const decoded = jwt.verify(token, TOKEN_KEY) as any;
      const user = await UserModel.findById(decoded.id);

      if (decoded) {
        const group = {
          id: groupDB._id,
          name: groupDB.name,
          category: groupDB.category,
          description: groupDB.description,
          creator: groupDB.creator,
          members: [] as string[],
        };

        const memberExists = groupDB.members.some(
          (member) => member === decoded.username
        );
        if (!memberExists)
          groupDB.members = [...groupDB.members, decoded.username];

        const alreadyJoined = user.groups.some(
          (invitation) => invitation.toString() === id.toString()
        );
        if (!alreadyJoined) user.groups = [...user.groups, id];

        group.members = groupDB.members;

        groupDB.save();
        user.save();

        return {
          group,
        };
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getGroup(id: string, token: string) {
    const groupDB = await GroupModel.findById(id);

    try {
      const decoded = jwt.verify(token, TOKEN_KEY) as any;
      if (decoded) {
        const group = {
          id: id,
          name: groupDB.name,
          category: groupDB.category,
          description: groupDB.description,
          creator: groupDB.creator,
          members: groupDB.members,
        };

        return group;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
