import { Router } from "express";

import { DeleteCartController } from "../controllers/Cart/DeleteCartController";
import { NewCartController } from "../controllers/Cart/NewCartController";
import { UpdateCartController } from "../controllers/Cart/UpdateCartController";
import { UserCartController } from "../controllers/Cart/UserCartController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const cartRoutes = Router();

const newCartController = new NewCartController();
const updateCartController = new UpdateCartController();
const deleteCartController = new DeleteCartController();
const userCartController = new UserCartController();

cartRoutes.post("/", ensureAuthenticated, newCartController.handle);
cartRoutes.put("/update/:id", ensureAuthenticated, updateCartController.handle);
cartRoutes.delete(
  "/delete/:id",
  ensureAuthenticated,
  deleteCartController.handle
);
cartRoutes.get("/list/:id", ensureAuthenticated, userCartController.handle);

export { cartRoutes };
