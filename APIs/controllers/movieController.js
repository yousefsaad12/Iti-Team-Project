const Movie = require("../models/movieModel");
const Genre = require("../models/genreModel");

exports.getAllMovies = async (req, res) => {
  try {
    const filter = {};

    if (req.query.genre) {
      const genres = req.query.genre.split(",");
      filter.genre_ids = { $in: genres };
    }

    if (req.query.vote) {
      filter.vote_average = { $gte: req.query.vote };
    }

    if (req.query.adult) {
      filter.adult = req.query.adult;
    }

    const movies = await Movie.find(filter);

    res.json({
      status: "success",
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ id: req.params.id });

    if (!movie) {
      return res.status(404).json({
        status: "fail",
        message: "No movie found with that ID",
      });
    }

    const genres = await Genre.find();
    const genreNames = genres
      .filter((genre) => movie.genre_ids.includes(genre.id))
      .map((genre) => genre.name);

    const newMovie = {
      ...movie._doc,
      genre_names: genreNames,
    };

    res.json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
