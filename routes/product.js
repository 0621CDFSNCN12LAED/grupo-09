const express = requiere("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.show);
router.get("/:id", productController.productDetail);

router.post("/create", productController.create);
router.put("/edit/:id", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;
