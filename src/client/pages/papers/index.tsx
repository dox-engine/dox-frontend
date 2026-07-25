import { Helmet } from "react-helmet-async";

// Page specific components, for filter, count, and card and pagination
import PapersFilter from "@/client/pages/papers/components/filters";
import PapersCount from "@/client/pages/papers/components/Paper-Count";
import PapersCard from "@/client/pages/papers/components/Paper-Card";
import PapersPagination from "@/client/pages/papers/components/pagination";

import { PapersPageMetaData } from "@/client/core/constants/metadata";

// Papers page component
function PapersPage() {
    return (
        <>
            <Helmet>
                <title>
                    {PapersPageMetaData.title}
                </title>
                <meta name="description" content={PapersPageMetaData.description} />
                <meta name="keywords" content={PapersPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 z-20 lg:min-w-8xl lg:max-w-8xl px-4 mb-32">
                <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    Scientific Papers
                </h1>
                <p className="leading-7 text-center lg:text-base text-xs max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    Access thousends of scientific books, research papers, <br />
                    and academic publications-all in one place.
                </p>
                <PapersCount />
                <PapersFilter />
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <PapersCard key={index} />
                    ))}
                </div>
                <PapersPagination />
            </main>
        </>
    );
};

export default PapersPage;