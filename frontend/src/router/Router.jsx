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
import AdminLogin from "../components/AdminLodin.jsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout..jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
// import RevenueChart from "../pages/dashboard/RevenueChart.jsx";
// import TopSallers from "../pages/dashboard/TopSallers.jsx";
// import Recomanded from "../pages/dashboard/Recomanded.jsx";
// import News from "../pages/dashboard/News.jsx";


  

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
        element:<AdminRoute> <AdminLogin /> </AdminRoute>,//< AdminLogin/>,
    },
    {
        path: "/dashboard",
        element: <AdminRoute>
            <DashboardLayout />
        </AdminRoute>,
        children: [
            {
                path: " ",
                element:<AdminRoute><Dashboard /> </AdminRoute> ,
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
