import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Slide from "./pages/Slide";
import Error from "./pages/Error";

const BASE_URL = "/AritaWareIntroduce/";

const router = createBrowserRouter([
    {
        path: BASE_URL,
        element: <Root />,
        errorElement: <Error />,
    },
    {
        path: `${BASE_URL}slide`,
        element: <Slide />,
        errorElement: <Error />,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
