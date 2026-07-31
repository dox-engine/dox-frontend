import { Helmet } from "react-helmet-async";

// Importing local ui components
import AboutContent from "@/client/pages/about/components/content";
import AboutContentPhone from "@/client/pages/about/components/content-phone";

import { AboutPageMetaData } from "@/client/core/constants/metadata";
import { Await, useLoaderData } from "react-router";

// import { useGetApi } from "@/client/core/hooks/useGetApi";

function Component() {
    const appVersion = useLoaderData();
    return (
        <>
            <Helmet>
                <title>
                    {AboutPageMetaData.title}
                </title>
                <meta name="description" content={AboutPageMetaData.description} />
                <meta name="keywords" content={AboutPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <Await resolve={appVersion}>
                <main className="flex flex-col justify-center items-center gap-y-10 z-20 lg:min-w-5xl lg:max-w-5xl px-4 mb-32">
                    <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                        About DOX-ENGINE
                    </h1>
                    <p className="leading-7 text-center lg:text-base text-xs max-w-lg lg:max-w-2xl mx-5 lg:mx-12 text-muted-foreground">
                        DOX-ENGINE is a shadow library built to provide free and unrestricted access to scientific knowledge. <br />
                        We belive that knowledge should be accessible to everyone.
                    </p>
                    <div className="bg-card border border-border px-4 py-3 rounded-full text-xs">
                        app version: {appVersion}
                    </div>
                    <div className="w-full hidden md:block">
                        <AboutContent />
                    </div>
                    <div className="w-full block md:hidden">
                        <AboutContentPhone />
                    </div>
                </main>
            </Await>
        </>
    );
};

export { Component };