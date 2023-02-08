import { model, ObjectId, Schema } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  tokens: string[];
  groups: string[];
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
  tokens: [
    {
      type: String,
    },
  ],
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "groups",
    },
  ],
});

const UserModel = model<IUserDocument>("Users", userSchema);

export default UserModel;
