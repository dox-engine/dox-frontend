// Default utilities and react components
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

// Importing RouterProvider for initiating router object
// And importing router object for using in RouterProvider
import { RouterProvider } from "react-router";

// Using helmet becuase this library gives us the ability
// Of changing route-level meta data so we could have control
// Over our pages meta data
import { HelmetProvider } from "react-helmet-async";

// Theme provider of switching between theme contexts
import { ThemeProvider } from "@/client/core/providers/theme-provider";

// Tooltip provider for tooltip component
import { TooltipProvider } from "@/client/components/ui/tooltip";

import { Toaster } from "@/client/components/ui/sonner";

// Router object which contains routes and layouts
import { router } from "@/client/router/index";

// Styles are in this file
import "@/client/index.css";

import Loading from "@/client/components/loading";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                    <Suspense fallback={<Loading />}>
                        <Toaster />
                        <TooltipProvider>
                            <RouterProvider router={router} />
                        </TooltipProvider>
                        <ReactQueryDevtools
                            initialIsOpen={false}
                            buttonPosition="bottom-right"
                            position="bottom"
                            theme="dark"
                        />
                    </Suspense>
                </ThemeProvider>
            </HelmetProvider>
        </QueryClientProvider>
    </StrictMode>,
);