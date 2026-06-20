import { createBrowserRouter } from "react-router";

import MainPage from "@/src/pages/main";
import BooksPage from "@/src/pages/books";
import AboutPage from "@/src/pages/about";

import ErrorLayout from "@/src/layout/error";

const MainLayout = import("@/src/layout/main");

const router = createBrowserRouter([
    {
        path: "/",
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