import express from "express";
import { postRegistrationController } from "../controllers/postRegistrationController.js";
import { postLoginController } from "../controllers/postLoginController.js";
import { getAllMoviesController } from "../controllers/getAllMoviesController.js";
import verifyToken from "../middlewears/auth-middleware.js";
import { postBookmarkController } from "../controllers/postBookmarkController.js";
import { getBookmarked } from "../controllers/getBookmarked.js";

const entertainmentRouter = express.Router();
entertainmentRouter.post("/register", postRegistrationController);
entertainmentRouter.post("/login", postLoginController);
entertainmentRouter.get("/allMovies", getAllMoviesController);
entertainmentRouter.post("/postBookmark", verifyToken, postBookmarkController);
entertainmentRouter.get("/bookmarked", verifyToken, getBookmarked);

export default entertainmentRouter;
