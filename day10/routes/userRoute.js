import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();
const userController = new UserController();
//insert in database
router.post("/add", userController.addUser);

//select all
router.get("/", userController.getAllUsers);

//select using where clause
router.get("/:id", userController.getUserById);

//update user
router.put("/update/:id", userController.updateUser);

//delete user
router.delete("/delete/:id", userController.deleteUser);

//get data using like 
router.get("/search/by", userController.searchUserByLocation);

export default router;