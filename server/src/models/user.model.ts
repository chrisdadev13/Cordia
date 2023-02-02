import { model, ObjectId, Schema } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  group: ObjectId;
  tokens: string[];
}

interface IUserDocument extends IUser {
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUserDocument>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Groups",
    required: true,
  },
  tokens: [
    {
      type: String,
    },
  ],
});

const UserModel = model<IUserDocument>("Users", userSchema);

export default UserModel;
