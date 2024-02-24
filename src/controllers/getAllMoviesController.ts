import allMoviesModel from "../models/allMoviesModel.js";
import { Request, Response } from "express";

export const getAllMoviesController = async (req: Request, res: Response) => {
  try {
    const allMovies = await allMoviesModel.find();
    console.log("allMovies", allMovies);
    res.send(allMovies);
  } catch (error) {
    console.log(error);
  }
};
