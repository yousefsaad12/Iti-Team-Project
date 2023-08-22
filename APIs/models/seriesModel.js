const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
  backdrop_path: String,
  first_air_date: Date,
  genre_ids: [Number],
  id: Number,
  name: String,
  origin_country: [String],
  original_language: String,
  original_name: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  vote_average: Number,
  vote_count: Number,
});

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;
