import { Router } from "express";

import { authRoutes } from "./authentication.routes";
import { cartRoutes } from "./cart.routes";
import { orderRoutes } from "./order.routes";
import { prodRoutes } from "./products.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/product", prodRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

export { router };
