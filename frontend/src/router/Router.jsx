import { createBrowserRouter }
    from "react-router";
import App from "../App";
// import Banner from "../pages/Banner";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/singleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/books/orderPage.jsx";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home  />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            
            {
                path: "/about",
                element: <diV>About</diV>,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/books/:id",
                element: < SingleBook />,
            },
        
            // implement checkout
            {
                path: "/checkout",
                element: <PrivateRoute><CheckOutPage /></PrivateRoute>,
            },
            {
                path: "/orders",
                element: <PrivateRoute><OrderPage /></PrivateRoute>,
            },
            
        ],
    },
    {
        path: "/admin",
        element: <div>Admin Login</div>,
    },
    {
        path: "/dashboard",
        element: <AdminRoute><div>Admin Dashboard</div></AdminRoute>,
        children: [
            {
                path: " ",
                element:<AdminRoute><div>Dashboard Home</div></AdminRoute> ,
            },
            {
                path: "add-new-book",
                element: <AdminRoute><div>Add New Book</div></AdminRoute>,
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><div>Edit Book</div></AdminRoute>,
            },
            {
                path: "manage-books",
                element: <AdminRoute><div>Manage Books</div></AdminRoute>,
            }
        ]

    }


]);

export default router;