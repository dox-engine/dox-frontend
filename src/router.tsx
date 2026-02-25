import { StrictMode } from "react";
import { createBrowserRouter } from "react-router";

import AppLayout from "@/src/components/layout/main/index";
import NotFoundLayout from "@/src/components/layout/notfound";

import NotFoundPage from "@/src/pages/notFound";
import HomePage from "@/src/pages/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <StrictMode>
                <AppLayout />
            </StrictMode>
        ),
        children: [
            { index: true, Component: HomePage }
        ],
    },
    {
        path: "*",
        element: (
            <StrictMode>
                <NotFoundLayout>
                    <NotFoundPage />
                </NotFoundLayout>
            </StrictMode>
        ),
    }
]);

export default router;