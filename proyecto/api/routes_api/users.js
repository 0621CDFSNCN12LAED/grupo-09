const express = require("express");
const router = express.Router();
const userControllers = require("../controllers_api/userController");

router.get("/users", userControllers.list);
router.get("/users/:id", userControllers.detail);

module.exports = router;
