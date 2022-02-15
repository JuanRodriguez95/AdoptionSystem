import express from "express";
import userController from "../controllers/userController.js";

const routerUser = express.Router();

routerUser.post("/registerUser", userController.registerUser);

export default routerUser;