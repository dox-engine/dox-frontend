import { createBrowserRouter } from "react-router";

import MainPage from "@/src/pages/main";
import BooksPage from "@/src/pages/books";
import AboutPage from "@/src/pages/about";

import Hydration from "@/src/components/Hydration";

import ErrorLayout from "@/src/layout/error";

const MainLayout = import("@/src/layout/main");

const router = createBrowserRouter([
    {
        path: "/",
        HydrateFallback: Hydration,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                Component: MainPage
            }
        ],
    },
    {
        path: "books",
        HydrateFallback: Hydration,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                Component: BooksPage
            }
        ],
    },
    {
        path: "about",
        HydrateFallback: Hydration,
        ErrorBoundary: ErrorLayout,
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