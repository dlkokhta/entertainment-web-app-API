import { Request, Response } from "express";
import bookmarkModel from "models/bookmarkModel";

export const getBookmarked = async (req: Request, res: Response) => {
  try {
    const bookmarked = await bookmarkModel.find();
    console.log(bookmarked);
    res.send(bookmarked);
  } catch (error) {
    console.log(error);
  }
};
