import { NextFunction, Request, Response } from "express";

import { AppError } from "../errors/AppError";
import User from "../models/User";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.user;

  const user = await User.findById({ id });

  if (!user?.isAdmin) throw new AppError("User is not administrator!");

  return next();
}
