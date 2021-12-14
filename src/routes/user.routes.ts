import { Router } from "express";

import { UserLoginController } from "../controllers/UserLoginController";
import { UserRegisterController } from "../controllers/UserRegisterController";
import { UserUpdateController } from "../controllers/UserUpdateController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const userRegisterController = new UserRegisterController();
const userLoginController = new UserLoginController();
const userUpdateController = new UserUpdateController();

userRoutes.post("/register", userRegisterController.handle);
userRoutes.post("/login", userLoginController.handle);
userRoutes.put("/update/:id", ensureAuthenticated, userUpdateController.handle);

export { userRoutes };
