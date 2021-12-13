import { Router } from "express";

import { UserRegisterController } from "../controllers/UserRegisterController";

const userRoutes = Router();

const userRegisterController = new UserRegisterController();

userRoutes.post("/register", userRegisterController.handle);

export { userRoutes };
