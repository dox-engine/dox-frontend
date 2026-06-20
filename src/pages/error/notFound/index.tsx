// Helmet library helps managing meta data in each page
import { Helmet } from "react-helmet-async";

// Importing button component from main components
import { Button } from "@/src/components/ui/button";

// Importing Home page meta data for using it in page
import { NotFoundPageMetaData } from "@/src/core/constants/metadata";

// Importing link from react router for navigation in pages
import { Link } from "react-router";

import { HouseIcon } from "@phosphor-icons/react";

// Not found page for using in error boundry
function NotFoundPage() {
    return (
        <>
            <Helmet>
                <title>
                    {NotFoundPageMetaData.title}
                </title>
                <meta name="description" content={NotFoundPageMetaData.description} />
                <meta name="keywords" content={NotFoundPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <div className="max-w-md flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 z-50 mx-5">
                <h1 className="font-bold text-7xl lg:text-9xl tracking-tight text-balance">
                    404
                </h1>
                <h2 className="font-bold text-xl lg:text-4xl tracking-tight text-balance">
                    Page Not Found
                </h2>
                <p className="leading-7 text-center lg:text-base text-xs">
                    The page you're looking for doesn't exist or has been moved
                </p>
                <Button variant="default" size="default" className="has-[>svg]:px-7 items-center gap-x-3" asChild>
                    <Link to="/">
                        <HouseIcon className="size-6" />
                        Back To Home
                    </Link>
                </Button>
            </div>
        </>
    );
};

export default NotFoundPage;