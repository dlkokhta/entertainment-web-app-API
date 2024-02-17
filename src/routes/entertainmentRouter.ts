import express from "express";
import { postRegistrationController } from "../controllers/postRegistrationController.js";

const entertainmentRouter = express.Router();
entertainmentRouter.post("/register", postRegistrationController);

export default entertainmentRouter;
