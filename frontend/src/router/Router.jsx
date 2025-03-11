import { createBrowserRouter }
    from "react-router";
import App from "../App";
import Banner from "../pages/Banner";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Banner />,
            },
            {
                path: "/login",
                element: <div>Login</div>,
            },
            {
                path: "/register",
                element: <div>Register</div>,
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
                path: "/contact",
                element:<div>Contact</div>,
            },
        ],
    }


]);

export default router;