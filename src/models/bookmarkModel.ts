import { Schema, model } from "mongoose";
import { bookmarkTypes } from "../types/bookmarkTypes.js";

const { String } = Schema.Types;

const bookmarkSchema = new Schema<bookmarkTypes>({
  userEmail: {
    type: String,
    required: true,
  },

  favoriteList: {
    type: [String],
    required: true,
    default: [],
  },
});

const bookmarkModel = model("bookmarkModel", bookmarkSchema);

export default bookmarkModel;
