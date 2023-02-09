import { Server } from "socket.io";
import GroupModel from "../models/group.model";

interface JoinValues {
  username: string;
  groupId: string;
}

interface MessageValues {
  username: string;
  groupId: string;
  message: string;
}

export default class Chat {
  static connection(app: any) {
    const io = new Server(app, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("User connected");

      socket.on("join-room", (data) => {
        const { username, invitation } = data;
        GroupModel.findById(invitation, (error: any, chatroom: any) => {
          if (error) return error;
          if (!chatroom) return "Chatroom not found";

          socket.join(invitation);
          console.log(`${username} joined the room ${invitation}`);
        });
      });

      socket.on("send-message", (data) => {
        const { username, group, message, time } = data;
        io.to(group).emit("send-message", {
          username: username,
          message: message,
          time: time,
        });
        console.log(data);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }
}
