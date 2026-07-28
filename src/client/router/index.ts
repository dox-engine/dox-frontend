// createBrowserRouter For managing routes and
// Defining route informations
import { createBrowserRouter } from "react-router";

// Front Pages(Landing, books, etc...)
// import MainPage from "@/client/pages/main";
// import BooksPage from "@/client/pages/books";
// import PapersPage from "@/client/pages/papers";
// import AboutPage from "@/client/pages/about";
// import ContactPage from "@/client/pages/contact";

// import ForbiddenPage from "@/client/pages/error/forbidden";

// PendingUi for fallBack Elements
import Hydration from "@/client/components/Hydration";

const MainPage = import("@/client/pages/main");
const BooksPage = import("@/client/pages/books");
const PapersPage = import("@/client/pages/papers");
const AboutPage = import("@/client/pages/about");
const ContactPage = import("@/client/pages/contact");

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
                lazy: () => MainPage
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
                lazy: () => BooksPage
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
                lazy: () => PapersPage
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
                lazy: () => AboutPage
            }
        ],
    },
    {
        path: "contact",
        HydrateFallback: Hydration,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => ContactPage
            }
        ],
    }
]);

export { router };