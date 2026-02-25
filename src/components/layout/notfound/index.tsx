import React from "react";

import ThemeProvider from "@/src/components/theme-provider";

function NotFoundLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
       <ThemeProvider>
            <main className="w-screen h-screen">
                {children}
            </main>
       </ThemeProvider>
    );
};

export default NotFoundLayout;