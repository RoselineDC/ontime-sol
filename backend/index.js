const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');
const adminRoutes = require('./src/stats/admin.stats');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewarea
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
  }));
  

// Database Connection
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
            dbName: "ontime-store" 
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send('Welcome to Ontime Solutions');
});

// Start Server
main().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});


// http://localhost:5000