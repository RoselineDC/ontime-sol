const express = require('express');
const router = express.Router();
const Order = require('./order.model');
const { createOrder } = require('./order.controller');

// Create a new order
router.post("/", createOrder) 


module.exports = router;
