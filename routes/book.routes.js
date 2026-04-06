const express = require('express');
const router = express.Router();
const controller = require('../controllers/book.controller');

router.get('/', controller.getAllBooks);
router.get('/:id', controller.getBooksById);
router.post('/', controller.CreateBooks); 
router.delete('/:id', controller.deleteBookById);

module.exports = router;