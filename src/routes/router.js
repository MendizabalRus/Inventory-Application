const { Router } = require("express");
const controller = require("../controllers/controller.js");
const router = Router();


router.get("/", controller.getHomePage);
router.get("/categories", controller.getAllCategories);
router.get("/products", controller.getAllProducts);
router.get("/brands", controller.getAllBrands)

module.exports = router;
