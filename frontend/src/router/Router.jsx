
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
import DashboardLayout from "../pages/dashboard/DashboardLayout.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import ManageBooks from "../pages/dashboard/managebook/manageBooks.jsx";
import AddBook from "../pages/dashboard/addbook/addBook.jsx";
import InputField from "../pages/dashboard/addbook/InputField.jsx";





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
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
                element: <div>About</div>,

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
        element: <AdminLogin />,
    },
    {
        path: "/dashboard",
        element: <AdminRoute>
           <DashboardLayout />,
        </AdminRoute>,
        children: [
            {
                path: "",
                element: <AdminRoute><Dashboard /></AdminRoute>,
            },
            {
                path: "add-new-book",
                element: <AdminRoute><AddBook/></AdminRoute>,
            },
            {
                path: "edit-book/:id",
                element: <AdminRoute><InputField /></AdminRoute>,
            },
            {
                path: "manage-books",
                element: <AdminRoute><ManageBooks /></AdminRoute>,
            }
        ]

    }


]);

export default router;
