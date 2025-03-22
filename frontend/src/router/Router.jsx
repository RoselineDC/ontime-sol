import { createBrowserRouter }
    from "react-router";
import App from "../App";
// import Banner from "../pages/Banner";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";



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