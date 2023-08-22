const Genre = require("../models/genreModel");

exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.json({
      status: "success",
      results: genres.length,
      data: {
        genres,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getGenre = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);

    res.json({
      status: "success",
      data: {
        genre,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
