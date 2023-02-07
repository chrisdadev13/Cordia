import { Router, Request as Req, Response as Res } from "express";
import GroupController from "../controllers/group.controller";

const groupRouter = Router();

groupRouter.post("/createGroup", GroupController.createGroup);
groupRouter.post("/joinGroup", GroupController.joinGroup);
groupRouter.get("/groupData/:invitation/:token", GroupController.getGroup);

export default groupRouter;
