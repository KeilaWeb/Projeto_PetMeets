const express = require("express");
const router = express.Router();
const userController = require('../controller/userController.js');

// Definindo rotas e mapeando para funções no userController
router.get("/user", userController.getAllUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUserById);

module.exports = router;