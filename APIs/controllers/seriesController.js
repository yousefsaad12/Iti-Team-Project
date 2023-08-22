const Series = require("../models/seriesModel");
const Genre = require("../models/genreModel");

exports.getAllSeries = async (req, res) => {
  try {
    const filter = {};

    if (req.query.genre) {
      const genres = req.query.genre.split(",");
      filter.genre_ids = { $in: genres };
    }

    if (req.query.vote) {
      filter.vote_average = { $gte: req.query.vote };
    }

    const series = await Series.find(filter);

    res.json({
      status: "success",
      results: series.length,
      data: {
        series,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getSeries = async (req, res) => {
  try {
    const series = await Series.findOne({ id: req.params.id });

    if (!series) {
      return res.status(404).json({
        status: "fail",
        message: "No series found with that ID",
      });
    }

    const genres = await Genre.find();
    const genreNames = genres
      .filter((genre) => series.genre_ids.includes(genre.id))
      .map((genre) => genre.name);

    const newSeries = {
      ...series._doc,
      genre_names: genreNames,
    };

    res.json({
      status: "success",
      data: {
        series: newSeries,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
