
const Order = require('./order.model');

// create an order
const createOrder = async (req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch (error) {
        console.error("error creating order", error);
        res.status(500).send({ message: "Failed to create order" });
    }
    
}




module.exports = {
    createOrder,
}