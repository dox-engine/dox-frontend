import { Helmet } from "react-helmet-async";

// Global ui components
import { TypingText } from "@/client/components/animate-ui/primitives/texts/typing";

// Page specific components
import MainSearch from "@/client/pages/main/components/search";

import { HomePageMetaData } from "@/client/core/constants/metadata";

// Home page component
function Component() {
    return (
        <>
            <Helmet>
                <title>
                    {HomePageMetaData.title}
                </title>
                <meta name="description" content={HomePageMetaData.description} />
                <meta name="keywords" content={HomePageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-10 z-20 md:min-w-lg lg:min-w-5xl md:max-w-lg lg:max-w-5xl px-4">
                <div className="flex flex-col justify-center items-center max-w-lg lg:max-w-2xl gap-y-10 mx-5 lg:mx-12">
                    <TypingText
                        text="Discover Scientific Knowledge"
                        className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance"
                        delay={0}
                        duration={50}
                    />
                    <TypingText
                        text="Access thousands of scientific books, research papers, and academic publications—all in one place."
                        className="leading-7 text-center lg:text-base text-xs text-muted-foreground"
                        delay={1500}
                        duration={20}
                    />
                </div>
                <MainSearch />
            </main>
        </>
    );
};

export { Component };