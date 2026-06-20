import { createBrowserRouter } from "react-router";

import MainPage from "@/src/pages/main";
import AboutPage from "@/src/pages/about";

const MainLayout = import("@/src/layout/main");

const router = createBrowserRouter([
    {
        path: "/",
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                Component: MainPage
            }
        ],
    },
    {
        path: "about",
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                Component: AboutPage
            }
        ],
    }
]);

export { router };