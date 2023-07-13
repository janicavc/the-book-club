const Book = require('../models/book');


module.exports = {
    index,
    new: newBook,
    show,
    create,
    update: updateBook,
    edit
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
    try {
        await Book.updateOne({_: req.params.id}, req.body);
        res.redirect(`/books/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.redirect('books/new')
    }
}

async function edit(req, res) {
    try {
        const book = await Book.findById(req.params.id)
        res.render('books/edit')
    } catch (err) {
        console.log(err);
        res.redirect('/books')
    }
}
