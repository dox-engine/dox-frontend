import { useEffect, useState } from "react";

import { Outlet } from "react-router";

// Importing footer component
import Footer from "@/client/components/footer";

// mounting ui component
import Loading from "@/client/components/loading";

// Importing navigation
import Navigation from "@/client/components/navigation";

// Default background
import { HexagonBackground } from "@/client/components/animate-ui/components/backgrounds/hexagon";

function Component() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        return () => setLoading(false)
    }, []);

    if (loading) {
        return (
            <Loading />
        );
    };
    
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