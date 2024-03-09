import { Request, Response } from "express";
import bookmarkModel from "models/bookmarkModel";

export const postBookmarkController = async (req: Request, res: Response) => {
  const { userEmail, _id } = req.body;
  console.log("req bodyyyyyy", userEmail, _id);
  try {
    let bookmark = await bookmarkModel.findOne({
      userEmail: userEmail,
    });

    if (bookmark) {
      // If the bookmark exists, check if _id is in the favoriteList
      const index = bookmark.favoriteList.indexOf(_id);
      if (index !== -1) {
        // If _id is in the favoriteList, remove it
        bookmark.favoriteList.splice(index, 1);
      } else {
        // If _id is not in the favoriteList, add it
        bookmark.favoriteList.push(_id);
      }
    } else {
      // If the bookmark does not exist, create a new one
      bookmark = new bookmarkModel({
        userEmail: userEmail,
        favoriteList: [_id],
      });
    }

    await bookmark.save();

    return res.status(201).json({ message: "Bookmark added successfully" });
  } catch (error) {
    console.error("Error adding bookmark:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
