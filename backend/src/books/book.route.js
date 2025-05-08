const express = require('express');
const router = express.Router();
const Book = require('./book.model');
const { postABook } = require('./book.contoller');
const { getAllBooks, getABook, updateABook, deleteABook } = require('./book.contoller');

const verifyAdminToken = require('../middlleware/verifyAdminToken')
const dotenv = require('dotenv');

// Create a new book
router.post("/create-book", verifyAdminToken, postABook);

// Get all books
router.get("/",  getAllBooks);

// Get a single book
router.get("/:id", getABook)

// update a book
router.put("/edit/:id", verifyAdminToken, updateABook);

// Delete a book
router.delete("/delete/:id", verifyAdminToken, deleteABook);

module.exports = router;
