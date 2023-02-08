import { Router, Request as Req, Response as Res } from "express";
import UserController from "../controllers/user.controller";
import auth from "../middlewares/auth";

const userRouter = Router();

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
userRouter.get("/user", auth, (req: any, res: any) => {
  res.json({ data: req.user });
});
userRouter.get("/getGroups", UserController.getGroups);

export default userRouter;
