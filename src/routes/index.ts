import { Router } from "express";

import { authRoutes } from "./authentication.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export { router };
