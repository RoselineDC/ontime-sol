import { createBrowserRouter }
    from "react-router";
import App from "../App";
// import Banner from "../pages/Banner";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";




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
                path: "/dashboard",
                element: <div>Dashboard</div>,
            },
            {
                path: "/products",
                element: <div>Products</div>,
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
            }
        
            // implement checkout
            {
                path: "/checkout",
                element: <CheckOutPage />
            }
            
        ],
    }


]);

export default router;