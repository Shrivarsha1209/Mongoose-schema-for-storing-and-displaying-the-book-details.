// bookModel.js
const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title is required
    },
    author: {
        type: String,
        required: true, // Author is required
    },
    publishedDate: {
        type: Date,
        default: Date.now, // Default to current date
    },
    genre: {
        type: String,
    },
    price: {
        type: Number,
        required: true, // Price is required
    },
    description: {
        type: String,
    },
});

// Create the Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
