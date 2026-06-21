// Default utilities and react components
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Importing RouterProvider for initiating router object
// And importing router object for using in RouterProvider
import { RouterProvider } from "react-router";

// Using helmet becuase this library gives us the ability
// Of changing route-level meta data so we could have control
// Over our pages meta data
import { HelmetProvider } from "react-helmet-async";

// Theme provider of switching between theme contexts
import { ThemeProvider } from "@/src/core/providers/theme-provider";

// Tooltip provider for tooltip component
import { TooltipProvider } from "@/src/components/ui/tooltip";

// Router object which contains routes and layouts
import { router } from "@/src/router/index";

// Styles are in this file
import "@/src/index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <TooltipProvider>
                    <RouterProvider router={router} />
                </TooltipProvider>
            </ThemeProvider>
        </HelmetProvider>
    </StrictMode>,
);