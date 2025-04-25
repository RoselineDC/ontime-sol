import { useGetOrdersByEmailQuery } from "../../redux/features/oders/orderApi";
import { useAuth } from "../../context/authContext";

const OrderPage = () => {
    const {currentUser} = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrdersByEmailQuery(currentUser.email)
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading orders</div>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4"> Your Orders</h2>
            {
                orders.length === 0 ? (<div className="text-center text-gray-500">No orders found.</div>) 
                : (<div>
                    {
                        orders.map((order, index) => (
                            <div>
                                <h2>
                                    OrderId: {order._id}
                                </h2>
                            </div>
                        ))
                    }
                </div>)
            }
            </div>
            )
            
}
            export default OrderPage;