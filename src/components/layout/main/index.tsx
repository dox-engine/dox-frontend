import { Outlet } from "react-router";

import ThemeProvider from "@/src/components/theme-provider";
import Navigation from "@/src/components/navigation";
import { TooltipProvider } from "@/src/components/ui/tooltip";

function AppLayout() {
    return (
       <ThemeProvider>
            <TooltipProvider>
                <div className="h-screen w-screen flex flex-col px-7 md:px-14 pt-5 md:pt-10">
                    <Navigation />
                    <Outlet />
                </div>
            </TooltipProvider>
       </ThemeProvider>
    );
};

export default AppLayout;