import { Router } from "express";

import { DeleteProductController } from "../controllers/Product/DeleteProductController";
import { ListAllProductsController } from "../controllers/Product/ListAllProductsController";
import { ListProductController } from "../controllers/Product/ListProductController";
import { NewProductController } from "../controllers/Product/NewProductController";
import { UpdateProductController } from "../controllers/Product/UpdateProductController";
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
