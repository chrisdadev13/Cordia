import { Response as Res, NextFunction as Next } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../configs/constants";

export default function auth(req: any, res: Res, next: Next) {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token)
    return res.status(403).send("A token is required for authentication");

  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    console.log(error);
  }
  return next();
}
