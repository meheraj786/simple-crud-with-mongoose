const express = require("express");

const userRouter = express.Router();
const userController = require("../controller/userController");

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getSingleUser);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.editUser);
userRouter.delete("/:id", userController.deteleUser);

module.exports = userRouter;
