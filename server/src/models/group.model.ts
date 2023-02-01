import { model, ObjectId, Schema, Types } from "mongoose";

export interface IGroup {
  name: string;
  membersCounter: number;
  messagesCounter: number;
  members: ObjectId[];
  messages: ObjectId[];
}

const groupSchema = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  membersCounter: {
    type: Number,
    required: true,
  },
  messagesCounter: {
    type: Number,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Messages",
      required: true,
    },
  ],
});

const GroupModel = model<IGroup>("Groups", groupSchema);

export default GroupModel;
