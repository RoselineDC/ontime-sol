const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET

const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid credentials' });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Admins only' });
        }

        req.user = user;
        next();
    });
};

module.exports = verifyAdminToken;
