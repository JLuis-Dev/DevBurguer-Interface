import { createBrowserRouter } from "react-router-dom";

import Home from "../containers/Home/index.jsx";
import Login  from "../containers/Login/index.jsx";
import Register from "../containers/Register/index.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/cadastro",
        element: <Register />,
    },
]);