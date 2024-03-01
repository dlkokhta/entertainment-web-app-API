import { Request, Response } from "express";
import bookmarkModel from "models/bookmarkModel";

export const postBookmarkController = async (req: Request, res: Response) => {
  const { userEmail, movieID } = req.body;
  try {
    const existingBookmark = await bookmarkModel.findOne({
      userEmail,
      favoriteList: movieID,
    });

    if (existingBookmark) {
      return res
        .status(400)
        .json({ error: "Bookmark already exists for this movie" });
    }

    const newBookmark = new bookmarkModel({
      userEmail: userEmail,
      favoriteList: [movieID],
    });
    await newBookmark.save();

    return res.status(201).json({ message: "Bookmark added successfully" });
  } catch (error) {
    console.error("Error adding bookmark:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
