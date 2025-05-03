const  jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const JWT_SECRET = process.env.JWT_SECRET

dotenv.config();

const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // // Check if the user is an admin
        // if (decoded.role !== 'admin') {
        //     return res.status(403).json({ message: 'Access denied. Admins only.' });
        // }

        req.user = user; 
        next(); 
    });
}
 module.exports = verifyAdminToken;