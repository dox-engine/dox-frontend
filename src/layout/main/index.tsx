import { HexagonBackground } from "@/src/components/animate-ui/components/backgrounds/hexagon";
import Footer from "@/src/components/footer";

import Navigation from "@/src/components/navigation";

import { Outlet } from "react-router";

function Component() {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center gap-y-36 relative">
            <HexagonBackground className="absolute top-0 left-0 right-0 bottom-0 z-10" />
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export { Component };