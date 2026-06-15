import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/src/index.css";
import { router } from "@/src/router/index";
import { RouterProvider } from "react-router";

import { ThemeProvider } from "@/src/core/providers/theme-provider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);