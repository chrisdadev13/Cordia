import { Router, Request as Req, Response as Res } from "express";
import GroupController from "../controllers/group.controller";

const groupRouter = Router();

groupRouter.post("/createRoom", GroupController.createGroup);

export default groupRouter;
