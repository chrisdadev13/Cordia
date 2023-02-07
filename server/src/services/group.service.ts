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

  static async joinGroup(id: string, token: string) {
    const doesExist = Boolean(await GroupModel.findById(id));
    if (!doesExist) return { message: "The provided group id, doesnt exist" };

    const groupDB = await GroupModel.findById(id);

    try {
      const decoded = jwt.verify(token, TOKEN_KEY) as any;

      if (decoded) {
        const group = {
          id: groupDB._id,
          name: groupDB.name,
          category: groupDB.category,
          description: groupDB.description,
          creator: groupDB.creator,
          members: [] as any[],
        };

        groupDB.members = [...groupDB.members, decoded.id];

        group.members = groupDB.members;

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
