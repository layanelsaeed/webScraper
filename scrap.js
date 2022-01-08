const axios = require("axios");
const cheerio = require("cheerio");

const getMoviesOscars = (firstCharacter) => {
  return axios
    .get(
      "https://en.wikipedia.org/wiki/List_of_Academy_Award-winning_films"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
      var parsedMovies = [];
      $('b').find('a').each(function (index, element) {
        parsedMovies.push($(element).text());
      });
      console.log(parsedMovies);
      return firstCharacter
        ? parsedMovies.filter(
            (movie) =>
              movie.charAt(0).toLocaleLowerCase() ===
              firstCharacter.toLocaleLowerCase()
          )
        : parsedMovies;
    })
    .catch(console.error);
};
const getMoviesIMDB = (firstCharacter) => {
  return axios
    .get(
      "https://www.imdb.com/chart/top/"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
      const movies = $("td > a");

      var parsedMovies = [];
      $('td').find('a').each(function (index, element) {
        parsedMovies.push($(element).text());
      });

      console.log(parsedMovies);
      return firstCharacter
        ? parsedMovies.filter(
            (movie) =>
              movie.charAt(0).toLocaleLowerCase() ===
              firstCharacter.toLocaleLowerCase()
          )
        : parsedMovies;
    })
    .catch(console.error);
};

const getMoviesRT = (firstCharacter) => {
  return axios
    .get(
      "https://www.rottentomatoes.com/top/bestofrt/"
    )
    .then((response) => response.data)
    .then((html) => {
      const $ = cheerio.load(html);
      const movies = $("td > a");

      var parsedMovies = [];
      $('td').find('a').each(function (index, element) {
        parsedMovies.push($(element).text());
      });

      console.log(parsedMovies);
      return firstCharacter
        ? parsedMovies.filter(
            (movie) =>
              movie.charAt(0).toLocaleLowerCase() ===
              firstCharacter.toLocaleLowerCase()
          )
        : parsedMovies;
    })
    .catch(console.error);
  }; 

module.exports = { getMoviesOscars ,getMoviesIMDB, getMoviesRT };
