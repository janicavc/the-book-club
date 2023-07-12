const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../controllers/ratings');

// POST /books/:id/ratings
router.post('/books/:id/ratings', ratingsCtrl.create);

module.exports = router;