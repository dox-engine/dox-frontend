import { HexagonBackground } from "@/src/components/animate-ui/components/backgrounds/hexagon";
import Footer from "@/src/components/footer";
import Loading from "@/src/components/loading";

import Navigation from "@/src/components/navigation";
import { useEffect, useState } from "react";

import { Outlet } from "react-router";

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