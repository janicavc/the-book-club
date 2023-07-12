const Book = require('../models/book');


module.exports = {
    create,
    delete: deleteBook
};

async function create(req, res) {
    const book = await Book.findById(req.params.id);
    
    book.ratings.push(req.body);
    try {
        await book.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/books/${book._id}`);
}

async function deleteBook(req, res) {
    const book = await Book.findOne({ 'ratings._id': req.params.id });

    book.ratings.remove(req.params.id);
    await book.save();
    res.redirect(`/books/${book._id}`);
}