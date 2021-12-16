import { Router } from "express";

import { NewCartController } from "../controllers/Cart/NewCartController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const cartRoutes = Router();

const newCartController = new NewCartController();

cartRoutes.post("/", ensureAuthenticated, newCartController.handle);

export { cartRoutes };
