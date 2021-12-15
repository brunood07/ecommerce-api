import { Router } from "express";

import { DeleteProductController } from "../controllers/DeleteProductController";
import { ListAllProductsController } from "../controllers/ListAllProductsController";
import { ListProductController } from "../controllers/ListProductController";
import { NewProductController } from "../controllers/NewProductController";
import { UpdateProductController } from "../controllers/UpdateProductController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const prodRoutes = Router();

const newProductController = new NewProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const listAllProductsController = new ListAllProductsController();

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
prodRoutes.get("/find/:id", ensureAuthenticated, listProductController.handle);
prodRoutes.get("/find", ensureAuthenticated, listAllProductsController.handle);

export { prodRoutes };
