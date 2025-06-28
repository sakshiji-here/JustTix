import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    overview: { type: String, required: true },
    poster_path: { type: String, required: true },
    backdrop_path: { type: String, required: true },
    release_date: { type: String },
    original_language: { type: String },
    tagline: { type: String },
    // Corrected genres: Array of objects with id and nameAdd commentMore actions
    genres: [
      {
        id: { type: Number, required: true },
        name: { type: String, required: true }
      }
    ],

    // Corrected casts: Array of full cast objects
    casts: [
      {
        adult: Boolean,
        gender: Number,
        id: Number,
        known_for_department: String,
        name: String,
        original_name: String,
        popularity: Number,
        profile_path: String,
        cast_id: Number,
        character: String,
        credit_id: String,
        order: Number,
      }Add commentMore actions
    ],
    vote_average: { type: Number, required: true },
    runtime: { type: Number, required: true },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
