const Book = require('../models/book');


module.exports = {
    index,
    new: newBook,
    show,
    create,
    update: updateBook
};

async function index(req, res) {
    const books = await Book.find({});
    res.render('books/index', { title: 'All Books', books });
}

async function show(req, res) {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { title: 'Book Detail', book });
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

async function updateBook(req, res) {
    
}

