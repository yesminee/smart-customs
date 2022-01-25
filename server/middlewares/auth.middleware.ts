import user from "../models/users/user.model";
import jwt from "jsonwebtoken";
// @ts-ignore
export default async (req, res, next) => {
  if (req.token != "null" && typeof req.token != "undefined") {
    const decoded = jwt.decode(req.token);
    // @ts-ignore
    req.user = await user.findOne({ _id: decoded._id });
  }
  next();
};
