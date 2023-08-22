const fs = require("fs");
const mongoose = require("mongoose");

const Movie = require("../models/movieModel");
const Series = require("../models/seriesModel");
const Genre = require("../models/genreModel");

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.mahqslt.mongodb.net/MoviesData1")
  .then(function () {
    console.log("connected to database");
  })
  .catch(function (err) {
    console.log(`Error connecting to database,wrong userName or password`);
  });

const movies = JSON.parse(
  fs.readFileSync(`${__dirname}/moviesData.json`, "utf-8")
);
const series = JSON.parse(
  fs.readFileSync(`${__dirname}/seriesData.json`, "utf-8")
);
const genres = JSON.parse(
  fs.readFileSync(`${__dirname}/genresData.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Movie.create(movies);
    await Series.create(series);
    await Genre.create(genres);

    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Movie.deleteMany();
    await Series.deleteMany();
    await Genre.deleteMany();

    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

importData();
// deleteData();
