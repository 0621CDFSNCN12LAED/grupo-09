const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainControllers");

/* GET home page. */
router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/registro", mainController.registro);
router.get("/productDetail", mainController.detalleProducto);
router.get("/productCart", mainController.cartaProducto);

module.exports = router;
