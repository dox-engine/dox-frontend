import { createBrowserRouter } from "react-router";

import MainPage from "@/src/pages/main";

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
    }
]);

export { router };