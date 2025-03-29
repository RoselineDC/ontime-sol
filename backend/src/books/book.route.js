const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
app.use(cors());


// receive from db to frontend 
router.get
// post a book

// submit from frontend  to database
router.post("/create-book", async (req, res) => {
    console.log(req.body);
    
})

// edit or update date in database  put/pat

// deale from database 
//router.delete


module.exports = router