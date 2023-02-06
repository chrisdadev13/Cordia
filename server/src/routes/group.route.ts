import { Router, Request as Req, Response as Res } from "express";
import GroupController from "../controllers/group.controller";

const groupRouter = Router();

groupRouter.post("/createGroup", GroupController.createGroup);

export default groupRouter;
