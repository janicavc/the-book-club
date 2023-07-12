module.exports = {
    new: newBook,
    create,
    index
};

async function index(req, res) {
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books', books});
}

function newBook(req, res) {
    res.render('books/new', { errorMsg: '' });
}

async function create(req, res) {
    const Book = require('../models/book');

    try {
        await Book.create(req.body);
        res.redirect('/books/new');
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}