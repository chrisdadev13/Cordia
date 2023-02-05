import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user.route";
import groupRouter from "./routes/group.route";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/groups", groupRouter);

export default app;
