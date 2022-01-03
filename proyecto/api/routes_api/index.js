const express = require("express");
const router = express.Router();

const userRoutes = require("./users");
const productRoutes = require("./products");

router.use(userRoutes);
router.use(productRoutes);

module.exports = router;
