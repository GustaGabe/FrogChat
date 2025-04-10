import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { NotFound } from "./components/notfound/noutfound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />
    }
])