var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books');

router.get('/new', booksCtrl.new);

module.exports = router;
