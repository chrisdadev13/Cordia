import mongoose from "mongoose";
import { DB_URI } from "./constants";

export default class Database {
  static async ConnectDB() {
    try {
      await mongoose.connect(DB_URI);
      console.log("Connected to the database successfully");
    } catch (error) {
      console.log(error);
    }
  }
}
