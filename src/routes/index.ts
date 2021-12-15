import { Router } from "express";

import { authRoutes } from "./authentication.routes";
import { prodRoutes } from "./products.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/product", prodRoutes);

export { router };
