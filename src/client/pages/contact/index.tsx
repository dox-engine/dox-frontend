import { Helmet } from "react-helmet-async";

import ContactContent from "@/client/pages/contact/contact-info";

import { ContactPageMetaData } from "@/client/core/constants/metadata";

function Component() {
    return (
        <>
            <Helmet>
                <title>
                    {ContactPageMetaData.title}
                </title>
                <meta name="description" content={ContactPageMetaData.description} />
                <meta name="keywords" content={ContactPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-10 z-20 lg:min-w-5xl lg:max-w-5xl px-4 mb-32">
                <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    Get In Touch
                </h1>
                <p className="leading-7 text-center lg:text-base text-xs max-w-lg lg:max-w-2xl mx-5 lg:mx-12 text-muted-foreground">
                    We'd love to hear from you! Feel free to reach out through any of the channels below.
                </p>
                <ContactContent />
            </main>
        </>
    );
};

export { Component };