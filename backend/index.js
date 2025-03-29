const express = require('express')
const app = express()

// import cors
const cors = require('cors')

// impport mongoose
const mongoose = require('mongoose');

// port
const port = process.env.PORT || 5000



// import dotenv
require('dotenv').config()


// password and username for mongodb
// C4z0qvYdsfrQMAwP
// roselinedanga


// middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5000'],
    credentials: true
}))

// ROUTES
const bookRoutes = require('./src/books/book.route')
app.use('/api/books', bookRoutes)

// mongoose main function
async function main() {
    await mongoose.connect(process.env.DB_URl);
    
    // routes
    app.use('/', (req, res) => {
        res.send('Welcomme to Ontime Solutions ')
      })
  }
//   call function main().catch(err => console.log(err));
main().then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})