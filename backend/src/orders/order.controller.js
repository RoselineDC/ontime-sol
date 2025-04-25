
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

// get all orders by id
const getOrdersByEmail = async (req, res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find(
            { email }).sort({ createdAt: -1 });
        if (!orders) {
            return res.status(404).json({ message: "No orders found" });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error("error getting orders", error);
        res.status(500).send({ message: "Failed to get orders" });
    }

}




module.exports = {
    createOrder,
    getOrdersByEmail
}