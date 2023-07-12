require('dotenv').config();
require('./config/database');

const Book = require('./models/book');

let books = await Book.find({});
console.log(books);