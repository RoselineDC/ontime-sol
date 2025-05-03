const express = require('express');
const router = express.Router();
const Book = require('./book.model');
const { postABook } = require('./book.contoller');
const { getAllBooks } = require('./book.contoller');
const { getABook } = require('./book.contoller');
const { updateABook } = require('./book.contoller');
const { deleteABook } = require('./book.contoller');
const verifyAdminToken = require('../middlleware/verifyAdminToken');
const dotenv = require('dotenv');

// Create a new book
router.post("/create-book", verifyAdminToken, postABook);

// Get all books
router.get("/",  getAllBooks);

// Get a single book
router.get("/:id", getABook)

// update a book
router.put("/edit/:id", updateABook);

// Delete a book
router.delete("/delete/:id", verifyAdminToken, deleteABook);

module.exports = router;
