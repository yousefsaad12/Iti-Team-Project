const express = require("express");

const movieController = require("../controllers/movieController");

const movieRouter = express.Router();

movieRouter.route("/").get(movieController.getAllMovies);

movieRouter.route("/:id").get(movieController.getMovie);
// .patch(movieController.updateMovie)
// .delete(movieController.deleteMovie);

module.exports = movieRouter;
