const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Movies = require("./schema/list");
const bodyParser = require("body-parser");
const {getMoviesIMDB, getMoviesOscars,getMoviesRT} = require("./scrap");
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

async function main() {
  var uri = "mongodb+srv://badawi:badawi1@webscraper.wyxbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  await mongoose
    .connect( uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((config) => {
      console.log("connected to DB successfully");
    });
}
main().catch(console.error);

app.listen(3000, async (req, res) => {
  console.log(`Server listening on Port ${3000}`);

  app.get("/oscars/:char", async (req, res) => {
    getMoviesOscars(req.params.char).then((list) => {
      const newMovies = new Movies({
        movies: list
      });
      newMovies.save().then((movies) => res.json(movies));
    });
  });

  app.get("/imdb/:char", async (req, res) => {
    getMoviesIMDB(req.params.char).then((list) => {
      const newMovies = new Movies({
        movies: list
      });
      newMovies.save().then((movies) => res.json(movies));
    });
  });

  app.get("/rottenTomatoes/:char", async (req, res) => {
    getMoviesRT(req.params.char).then((list) => {
      const newMovies = new Movies({
        movies: list
      });
      newMovies.save().then((movies) => res.json(movies));
    });
  });
});
