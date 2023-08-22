// series router
const express = require("express");

const seriesController = require("../controllers/seriesController");

const seriesRouter = express.Router();

seriesRouter.route("/").get(seriesController.getAllSeries);

seriesRouter.route("/:id").get(seriesController.getSeries);

module.exports = seriesRouter;
