import { Router } from "express";

import { NewProductController } from "../controllers/NewProductController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const prodRoutes = Router();

const newProductController = new NewProductController();

prodRoutes.post("/register", ensureAuthenticated, newProductController.handle);

export { prodRoutes };
