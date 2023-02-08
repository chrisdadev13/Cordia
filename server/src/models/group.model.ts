import { model, ObjectId, Schema } from "mongoose";

export interface IGroup {
  name: string;
  category: string;
  description: string;
  creator: string;
  members: string[];
  messages: ObjectId[];
}

const groupSchema = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  members: [
    {
      type: String,
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Messages",
    },
  ],
});

const GroupModel = model<IGroup>("Groups", groupSchema);

export default GroupModel;
