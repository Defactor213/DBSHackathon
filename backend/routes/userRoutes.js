const express = require("express");

const userController = require("../controllers/user");
const userRoutes = express.Router();

userRoutes.post("/userLogin", userController.userLogin);

module.exports = userRoutes;
