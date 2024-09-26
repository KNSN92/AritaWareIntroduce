import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Slide from "./pages/Slide";
import Error from "./pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
    },
    {
        path: "/slide",
        element: <Slide />,
        errorElement: <Error />,
    }
]);

function AppRoutes() {
    return (
        <RouterProvider router={router} />
    );
}

export default AppRoutes;