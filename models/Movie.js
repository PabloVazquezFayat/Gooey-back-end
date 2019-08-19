const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    image: {type: String, default: 'images/test-dummy.jpg'},
    title: String,
    director: String,
    stars: {type: Array, default: undefined},
    description: String,
    showtimes: {type: Array, default: undefined},
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;