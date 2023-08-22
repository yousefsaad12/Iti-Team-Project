var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");

var app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//connect to database
mongoose
  .connect("mongodb+srv://admin:admin@cluster0.mahqslt.mongodb.net/MoviesData1")
  .then(function () {
    console.log("connected to database");
  })
  .catch(function (err) {
    console.log(`Error connecting to database,wrong userName or password`);
  });

// Routes
const movieRouter = require("./routes/movieRouter");
const seriesRouter = require("./routes/seriesRouter");
const genreRouter = require("./routes/genreRouter");

app.use("/api/movies", movieRouter);
app.use("/api/series", seriesRouter);
app.use("/api/genres", genreRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
