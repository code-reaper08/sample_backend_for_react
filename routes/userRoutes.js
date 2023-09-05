const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CREATE A USER
router.post("/", userController.createUser);

// GET A USER BY ID
router.get("/:id", userController.getUserById);

// GET ALL USERS
router.get("/", userController.getAllUsers);

// EDIT A USER DATA
router.put("/:id", userController.updateUser);

// DELETE A USER
router.delete("/:id", userController.deleteUser);

module.exports = router;
