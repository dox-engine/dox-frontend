import { Helmet } from "react-helmet-async";

import { BookDetailPageMetaData } from "@/client/core/constants/metadata";

import BookCover from "@/client/pages/book-detail/components/book-cover";
import BookInfo from "@/client/pages/book-detail/components/book-info";

function Component() {
    return (
        <>
            <Helmet>
                <title>
                    {BookDetailPageMetaData.title}
                </title>
                <meta name="description" content={BookDetailPageMetaData.description} />
                <meta name="keywords" content={BookDetailPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-10 z-20 md:min-w-lg lg:min-w-7xl md:max-w-lg lg:max-w-7xl px-4 mb-36">
                <div className="flex flex-col lg:flex-row justify-center w-full gap-x-10 gap-y-10 lg:gap-y-0">
                    <BookCover />
                    <BookInfo />
                </div>
            </main>
        </>
    );
};

export { Component };