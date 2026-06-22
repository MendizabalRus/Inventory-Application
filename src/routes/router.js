const { Router } = require("express");
const controller = require("../controllers/controller.js");
const router = Router();

router.get("/", controller.getAllCategories);
router.get("/products", controller.getAllProducts);

module.exports = router;
