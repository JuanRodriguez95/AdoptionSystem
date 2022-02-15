import express from "express";
import adoptionController from "../controllers/adoptionController.js";

const routerAdop = express.Router();

routerAdop.post("/registerAdop", adoptionController.registerAdop);

export default routerAdop;