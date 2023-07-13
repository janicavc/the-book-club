const express = require('express');
const router = express.Router();
const ratingsCtrl = require('../controllers/ratings');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /books/:id/ratings
router.post('/books/:id/ratings', ensureLoggedIn, ratingsCtrl.create);
// DELETE /:id
router.delete('/ratings/:id', ensureLoggedIn, ratingsCtrl.delete);



module.exports = router;