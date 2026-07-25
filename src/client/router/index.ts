// createBrowserRouter For managing routes and
// Defining route informations
import { createBrowserRouter } from "react-router";

// Front Pages(Landing, books, etc...)
import MainPage from "@/client/pages/main";
import BooksPage from "@/client/pages/books";
import PapersPage from "@/client/pages/papers";
import AboutPage from "@/client/pages/about";

// PendingUi for fallBack Elements
import Hydration from "@/client/components/Hydration";

// Importing multiple pages layouts
// such as main layouts, product layout, etc...
import ErrorLayout from "@/client/layout/error";

// Lazy layout importing
// Spilitting LayoutPages For code spiliting
const MainLayout = import("@/client/layout/main");


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
        path: "papers",
        HydrateFallback: Hydration,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                Component: PapersPage
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