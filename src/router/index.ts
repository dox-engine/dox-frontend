// createBrowserRouter For managing routes and
// Defining route informations
import { createBrowserRouter } from "react-router";

// Front Pages(Landing, books, etc...)
import MainPage from "@/src/pages/main";
import BooksPage from "@/src/pages/books";
import AboutPage from "@/src/pages/about";

// PendingUi for fallBack Elements
import Hydration from "@/src/components/Hydration";

// Importing multiple pages layouts
// such as main layouts, product layout, etc...
import ErrorLayout from "@/src/layout/error";

// Lazy layout importing
// Spilitting LayoutPages For code spiliting
const MainLayout = import("@/src/layout/main");


// Main router object, This object is centry object
// And all of the pages, Evene dynamic ones are fetched and loaded
// In this page
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