const express = require("express");
const app = express();

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

app.listen(3000, async (req, res) => {
  console.log(`Server listening on Port ${3000}`);

  app.get("/oscars", async (req, res) => {
    getMoviesOscars(req.query.char).then((presidents) => {
      return res.status(200).json(presidents);
    });
  });

  app.get("/imdb", async (req, res) => {
    getMoviesIMDB(req.query.char).then((presidents) => {
      return res.status(200).json(presidents);
    });
  });

  app.get("/rottenTomatoes", async (req, res) => {
    getMoviesRT(req.query.char).then((presidents) => {
      return res.status(200).json(presidents);
    });
  });
});
