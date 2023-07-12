var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books');
// all start with /books
// GET /books
router.get('/', booksCtrl.index);
// GET /books/new
router.get('/new', booksCtrl.new);
// POST /books
router.post('/', booksCtrl.create);

module.exports = router;
