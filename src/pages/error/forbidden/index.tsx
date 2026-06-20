// Helmet library helps managing meta data in each page
import { Helmet } from "react-helmet-async";

// Importing button component from main components
import { Button } from "@/src/components/ui/button";

// Importing Home page meta data for using it in page
import { ForbiddenPageMetaData } from "@/src/core/constants/metadata";

// Importing link from react router for navigation in pages
import { Link } from "react-router";

import { HouseIcon } from "@phosphor-icons/react";

// Not found page for using in error boundry
function ForbiddenPage() {
    return (
        <>
            <Helmet>
                <title>
                    {ForbiddenPageMetaData.title}
                </title>
                <meta name="description" content={ForbiddenPageMetaData.description} />
                <meta name="keywords" content={ForbiddenPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <div className="max-w-md flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 z-50 mx-5">
                <h1 className="font-bold text-7xl lg:text-9xl tracking-tight text-balance">
                    403
                </h1>
                <h2 className="font-bold text-xl lg:text-4xl tracking-tight text-balance">
                    Forbidden
                </h2>
                <p className="leading-7 text-center lg:text-base text-xs">
                    The page you're looking for is forbidden
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

export default ForbiddenPage;