const express = require('express');
const router = express.Router();
const Order = require('./order.model');
const { createOrder } = require('./order.controller');
const { getOrdersByEmail } = require('./order.controller');

// Create a new order
router.post("/", createOrder) 
router.get("/email/:email", getOrdersByEmail); 

module.exports = router;

