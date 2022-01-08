const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const MoviesSchema = new Schema({
    movies: {
        type: Array,
        required: false
    },
});

module.exports = movie = mongoose.model('movie',MoviesSchema)