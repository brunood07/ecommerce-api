import { Router } from "express";

import { UserLoginController } from "../controllers/UserLoginController";
import { UserRegisterController } from "../controllers/UserRegisterController";

const userRoutes = Router();

const userRegisterController = new UserRegisterController();
const userLoginController = new UserLoginController();

userRoutes.post("/register", userRegisterController.handle);
userRoutes.post("/login", userLoginController.handle);

export { userRoutes };
