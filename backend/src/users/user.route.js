const express = require('express');
const dotenv = require('dotenv');
const  User = require('./user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

router.post("/admin", async (req, res) => {
    
   const { username, password } = req.body;
   try{
    const admin = await User.findOne({ username });
    if (!admin) {
        return res.status(404).json({ message: "Admin not found!" });
    }
   if(admin.password !== password) {
        return res.status(401).json({ message: "Invalid credentials!" });
    }
    const token = jwt.sign({ id: admin._id, username: admin.username, role: admin.role }, 
        JWT_SECRET,
        { expiresIn: '1h' });

        return res.status(200).json({
            message: "Admin logged in successfully",
            token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

   }catch (error) {
       console.error("error fetching admin", error);
       res.status(500).send({ message: "Failed to fetch admin" });
   }
})



module.exports = router;