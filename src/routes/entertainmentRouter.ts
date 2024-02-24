import express from "express";
import { postRegistrationController } from "../controllers/postRegistrationController.js";
import { postLoginController } from "../controllers/postLoginController.js";
import { getAllMoviesController } from "../controllers/getAllMoviesController.js";

const entertainmentRouter = express.Router();
entertainmentRouter.post("/register", postRegistrationController);
entertainmentRouter.post("/login", postLoginController);
entertainmentRouter.get("/allMovies", getAllMoviesController);

export default entertainmentRouter;
