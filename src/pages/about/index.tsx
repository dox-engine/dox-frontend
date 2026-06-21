import { Helmet } from "react-helmet-async";

// Importing local ui components
import AboutContent from "@/src/pages/about/components/content";
import AboutContentPhone from "@/src/pages/about/components/content-phone";

import { AboutPageMetaData } from "@/src/core/constants/metadata";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>
                    {AboutPageMetaData.title}
                </title>
                <meta name="description" content={AboutPageMetaData.description} />
                <meta name="keywords" content={AboutPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-10 z-20 lg:min-w-5xl lg:max-w-5xl px-4 mb-32">
                <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    About DOX-ENGINE
                </h1>
                <p className="leading-7 text-center lg:text-base text-xs max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    DOX-ENGINE is a shadow library built to provide free and unrestricted access to scientific knowledge. <br />
                    We belive that knowledge should be accessible to everyone.
                </p>
                <div className="bg-card border border-border px-4 py-3 rounded-full text-xs">
                    app version: 0.0.1-alpha-0.1
                </div>
                <div className="w-full hidden md:block">
                    <AboutContent />
                </div>
                <div className="w-full block md:hidden">
                    <AboutContentPhone />
                </div>
            </main>
        </>
    );
};

export default AboutPage;