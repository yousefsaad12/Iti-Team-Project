// genre router
const express = require("express");

const genreController = require("../controllers/genreController");

const genreRouter = express.Router();

genreRouter.route("/").get(genreController.getAllGenres);

genreRouter.route("/:id").get(genreController.getGenre);

module.exports = genreRouter;
