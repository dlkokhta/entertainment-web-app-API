import allMoviesModel from "../models/allMoviesModel.js";
import { Request, Response } from "express";

export const getAllMoviesController = async (_: Request, res: Response) => {
  try {
    const allMovies = await allMoviesModel.find();
    console.log();
    // const ids = allMovies.map((movie) => movie._id);
    // console.log("typeof ids", typeof ids, ids);
    console.log(allMovies);
    res.send(allMovies);
  } catch (error) {
    console.log(error);
  }
};
