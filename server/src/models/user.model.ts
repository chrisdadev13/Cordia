import mongoose, { model, ObjectId, Schema, Types } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  group: ObjectId;
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
  email: {
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
});

const UserModel = model<IUserDocument>("Users", userSchema);

export default UserModel;
