const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema ({
    rating: {
        type: Number,
        min: 1,
        max: 10,
        default: 10
    }
}, {
    timestamps: true
});

const bookSchema = new Schema({
    title: String,
    author: String,
    publishYear: Number,
    genre: String,
    description: String,
    ratings: [ratingSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);