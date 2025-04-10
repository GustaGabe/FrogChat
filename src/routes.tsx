import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { NotFound } from "./components/notfound/noutfound";
import { LoginPage } from "./pages/login/login.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: '/login',
        element: <LoginPage />
    }
])