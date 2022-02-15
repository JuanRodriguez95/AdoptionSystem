import express from "express";
import animalController from "../controllers/animalController.js";

const routerAnimal = express.Router();

routerAnimal.post("/registerAnimal", animalController.registerAnimal);

export default routerAnimal;