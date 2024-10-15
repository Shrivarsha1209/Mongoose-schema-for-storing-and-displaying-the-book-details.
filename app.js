// app.js
const mongoose = require('mongoose');
const Book = require('./bookModel'); // Import the Book model

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/bookstore'; // Change if using a different URI

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB successfully!');
        
        // Example: Create a new book document
        const newBook = new Book({
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            publishedDate: new Date('1925-04-10'),
            genre: 'Fiction',
            price: 10.99,
            description: 'A novel set in the Roaring Twenties, exploring themes of decadence and excess.',
        });

        // Save the book to the database
        newBook.save()
            .then(() => {
                console.log('Book saved successfully!');
                return Book.find(); // Retrieve all books
            })
            .then(books => {
                console.log('Books in the database:', books);
                mongoose.connection.close(); // Close the connection after operations
            })
            .catch(err => {
                console.error('Error saving book:', err);
            });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });
