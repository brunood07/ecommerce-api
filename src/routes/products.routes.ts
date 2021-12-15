import { Router } from "express";

import { DeleteProductController } from "../controllers/DeleteProductController";
import { NewProductController } from "../controllers/NewProductController";
import { UpdateProductController } from "../controllers/UpdateProductController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const prodRoutes = Router();

const newProductController = new NewProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

prodRoutes.post("/register", ensureAuthenticated, newProductController.handle);
prodRoutes.post(
  "/update/:id",
  ensureAuthenticated,
  updateProductController.handle
);
prodRoutes.delete(
  "/delete/:id",
  ensureAuthenticated,
  deleteProductController.handle
);

export { prodRoutes };
