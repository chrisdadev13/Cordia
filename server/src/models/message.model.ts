import { model, ObjectId, Schema } from "mongoose";

export interface IMessage {
  text: string;
  author: string;
  group: ObjectId;
  createdAt: string;
}

const messageSchema = new Schema<IMessage>({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Groups",
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

const MessageModel = model<IMessage>("Messages", messageSchema);

export default MessageModel;
