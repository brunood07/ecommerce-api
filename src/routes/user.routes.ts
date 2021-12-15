import { Router } from "express";

import { UserDeleteController } from "../controllers/User/UserDeleteController";
import { UserLoginController } from "../controllers/User/UserLoginController";
import { UserProfileController } from "../controllers/User/UserProfileController";
import { UserRegisterController } from "../controllers/User/UserRegisterController";
import { UserUpdateController } from "../controllers/User/UserUpdateController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const userRegisterController = new UserRegisterController();
const userLoginController = new UserLoginController();
const userUpdateController = new UserUpdateController();
const userDeleteController = new UserDeleteController();
const userProfileController = new UserProfileController();

userRoutes.post("/register", userRegisterController.handle);
userRoutes.post("/login", userLoginController.handle);
userRoutes.put("/update/:id", ensureAuthenticated, userUpdateController.handle);
userRoutes.delete(
  "/delete/:id",
  ensureAuthenticated,
  userDeleteController.handle
);
userRoutes.get(
  "/profile/:id",
  ensureAuthenticated,
  userProfileController.handle
);

export { userRoutes };
