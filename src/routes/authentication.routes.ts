import { Router } from "express";

import { UserAuthenticateController } from "../controllers/User/UserAuthenticateController";

const authRoutes = Router();

const userAuthenticateController = new UserAuthenticateController();

authRoutes.post("/token", userAuthenticateController.handle);

export { authRoutes };
