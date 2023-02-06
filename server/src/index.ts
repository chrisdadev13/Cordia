import http from "http";
import app from "./app";
import Database from "./configs/db";
import Chat from "./utils/chat";
import { PORT } from "./configs/constants";

const server = http.createServer(app);

Database.ConnectDB();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

Chat.connection(server);
