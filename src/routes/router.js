const { Router } = require("express");
const controller = require("../controllers/controller.js");
const router = Router();

router.get("/", controller.getHomePage);

router.get("/categories", controller.getAllCategories);

router.get("/products", controller.getAllProducts);
router.get("/products/addProduct", controller.getAddProduct);
router.post("/products/addProduct", controller.postAddProduct);
router.get("/products/:id", controller.getProduct);
router.get("/products/:id/update", controller.getUpdateProduct);
router.post("/products/:id/update", controller.postUpdateProduct);
router.post("/products/:id/delete", controller.postDeleteProduct);

router.get("/brands", controller.getAllBrands);

module.exports = router;
