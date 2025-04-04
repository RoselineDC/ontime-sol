const Book = require('./book.model');

// post a product
const postABook = async (req, res) => {
    try {
        const newBook = await Book({ ...req.body });
        await newBook.save();
        res.status(200).send({message: 'Book posted successfully', book: newBook});
    }
    catch (error) {
        console.error("error posting product", error);
        res.status(500).send({ message: "Failed to post" });
    }
};
// get all products 
const getAllBooks = async (req, res) => {
    try {

        const books = await Book.find() .sort({ createdAt: -1 });
        res.status(200).send(books);
    } catch (error) {
        console.error("error fetching products", error);
        res.status(500).send({ message: "Failed to fetch products" });
    }
};
// get a single product
const getABook = async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (error) {
        console.error("error fetching product", error);
        res.status(500).send({ message: "Failed to fetch product" });
    }
};
// update a product
const updateABook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        });

    }
    catch (error) {
        console.error("error updating product", error);
        res.status(500).send({ message: "Failed to update" });
    }
};

// delete a product
const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        });
    } catch (error) {
        console.error("error deleting product", error);
        res.status(500).send({ message: "Failed to delete" });
    }
}

module.exports = {
    postABook,
    getAllBooks,
    getABook,
    updateABook,
    deleteABook
}
