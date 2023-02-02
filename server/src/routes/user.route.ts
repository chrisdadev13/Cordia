import { Router, Request as Req, Response as Res } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);

export default userRouter;
