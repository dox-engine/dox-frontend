import { Helmet } from "react-helmet-async";

import { PaperDetailPageMetaData } from "@/client/core/constants/metadata";

import PaperCover from "@/client/pages/paper-detail/components/paper-cover";
import PaperInfo from "@/client/pages/paper-detail/components/paper-info";

function Component() {
    return (
        <>
            <Helmet>
                <title>
                    {PaperDetailPageMetaData.title}
                </title>
                <meta name="description" content={PaperDetailPageMetaData.description} />
                <meta name="keywords" content={PaperDetailPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-10 z-20 md:min-w-lg lg:min-w-7xl md:max-w-lg lg:max-w-7xl px-4 mb-36">
                <div className="flex flex-col lg:flex-row justify-center w-full gap-x-10 gap-y-10 lg:gap-y-0">
                    <PaperCover />
                    <PaperInfo />
                </div>
            </main>
        </>
    );
};

export { Component };