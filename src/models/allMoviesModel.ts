import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";
import { allMovieTypes } from "types/allMovieTypes";

const { String } = Schema.Types;

const allMoviesSchema = new Schema<allMovieTypes>({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  },
  isTrending: {
    type: Boolean,
    default: true,
  },
  movieID: {
    type: String,
    required: true,
    default: uuid,
  },
});

const allMoviesModel = model("allMoviesModel", allMoviesSchema);
export default allMoviesModel;
