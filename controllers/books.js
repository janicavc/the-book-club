module.exports = {
    new: newBook
};

function newBook(req, res) {
    res.render('books/new', { errorMsg: '' });
}