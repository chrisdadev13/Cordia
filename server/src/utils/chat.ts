import { Server } from "socket.io";
import GroupModel from "../models/group.model";

export default class Chat {
  static connection(app: any) {
    const io = new Server(app);

    io.on("connection", (socket) => {
      console.log("User connected");

      socket.on("join-room", (groupId) => {
        GroupModel.findById(groupId, (error: any, chatroom: any) => {
          if (error) return error;
          if (!chatroom) return "Chatroom not found";

          socket.join(groupId);
          console.log("User joined room " + groupId);
        });
      });

      socket.on("send-message", (groupId, message) => {
        io.to(groupId).emit("message", message);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
}
