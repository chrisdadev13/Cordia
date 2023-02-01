import http from "http";
import app from "./app";

const server = http.createServer(app);

server.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
