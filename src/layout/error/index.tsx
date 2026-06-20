// Importing error objects and hooks to catching error and logging them
import { isRouteErrorResponse, useRouteError } from "react-router";

// Importing custom error pages
import NotFoundPage from "@/src/pages/error/notFound";
import { HexagonBackground } from "@/src/components/animate-ui/components/backgrounds/hexagon";
import Navigation from "@/src/components/navigation";
import ForbiddenPage from "@/src/pages/error/forbidden";
import InternalPage from "@/src/pages/error/internal";

// This function or component is for customizing error ui
function RootErrorLayout() {
    const routeError = useRouteError();
    if (isRouteErrorResponse(routeError)) {
        if (routeError.status === 404) {
            return (
                <NotFoundPage />
            );
        };

        if (routeError.status === 403) {
            return (
                <ForbiddenPage />
            );
        };
    } else if (routeError instanceof Error) {
        return (
            <InternalPage />
        );
    } else {
        return (
            <InternalPage />
        );
    };
};

function ErrorLayout() {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center gap-y-36 relative">
            <HexagonBackground className="absolute top-0 left-0 right-0 bottom-0 z-10" />
            <Navigation />
            <RootErrorLayout />
        </div>
    );
};

export default ErrorLayout;