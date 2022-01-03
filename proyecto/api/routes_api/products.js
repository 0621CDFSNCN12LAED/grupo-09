const express = require("express");
const router = express.Router();
const productControllers = require("../controllers_api/productController");

router.get("/products", productControllers.list);

router.get("/products/:id", productControllers.detail);

module.exports = router;
