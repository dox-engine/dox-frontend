import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router";

import { router } from "@/src/router/index";

import { ThemeProvider } from "@/src/core/providers/theme-provider";

import "@/src/index.css";

import { TooltipProvider } from "@/src/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <TooltipProvider>
                <RouterProvider router={router} />
            </TooltipProvider>
        </ThemeProvider>
    </StrictMode>,
);