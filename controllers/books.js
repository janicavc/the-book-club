const book = require('../models/book');
const Book = require('../models/book');


module.exports = {
    index,
    new: newBook,
    show,
    create,
    update,
    edit,
    delete: deleteBook
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
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}

async function update(req, res) {
    try {
       await Book.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
        genre: req.body.genre,
        description: req.body.description
       });
        res.redirect('/books/');
    } catch(err) {
        console.log(err);
        res.render('/books', { errorMsg: err.message});
    }
}

async function edit(req, res) {
    const book = await Book.findById(req.params.id);
    res.render('books/edit', { title: 'Edit Book', book });
}

async function deleteBook(req, res) {
    try {
        await Book.deleteOne({ _id: req.params.id });
        if (!book.user.equals(req.user._id)) {
            res.redirect('/books')
        }
        res.redirect('/books');
    } catch (err) {
        console.log(err);
    }
 }