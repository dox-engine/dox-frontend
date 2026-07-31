// createBrowserRouter For managing routes and
// Defining route informations
import { createBrowserRouter } from "react-router";

import { AxiosClient } from "@/client/core/api/services";

// Front Pages(Landing, books, etc...)
// import MainPage from "@/client/pages/main";
// import BooksPage from "@/client/pages/books";
// import PapersPage from "@/client/pages/papers";
// import AboutPage from "@/client/pages/about";
// import ContactPage from "@/client/pages/contact";

// import ForbiddenPage from "@/client/pages/error/forbidden";

// PendingUi for fallBack Elements
// import Hydration from "@/client/components/Hydration";
import Loading from "@/client/components/loading";

const MainPage = import("@/client/pages/main");

const BooksPage = import("@/client/pages/books");
const BookDetailPage = import("@/client/pages/book-detail");

const PapersPage = import("@/client/pages/papers");
const PaperDetailPage = import("@/client/pages/paper-detail");

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
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        /* loader: async () => {
            // return data from here
            throw data("FALSE", { status: 200 });
        }, */
        children: [
            {
                index: true,
                lazy: () => MainPage
            }
        ],
    },
    {
        path: "books",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => BooksPage
            },
            {
                path: ":bookId",
                lazy: () => BookDetailPage
            }
        ],
    },
    {
        path: "papers",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => PapersPage
            },
            {
                path: ":paperId",
                lazy: () => PaperDetailPage
            }
        ],
    },
    {
        path: "about",
        HydrateFallback: Loading,
        ErrorBoundary: ErrorLayout,
        lazy: () => MainLayout,
        children: [
            {
                index: true,
                lazy: () => AboutPage,
                loader: async () => {
                    const getVersion = await AxiosClient.get("/api/v1/version");
                    return getVersion.data as string;
                },
            }
        ],
    },
    {
        path: "contact",
        HydrateFallback: Loading,
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