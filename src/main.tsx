import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/src/index.css";
import { router } from "@/src/router/index";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);