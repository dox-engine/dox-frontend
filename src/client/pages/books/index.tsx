import { Helmet } from "react-helmet-async";

// Page specific components, for filter, count, and card and pagination
import BooksFilter from "@/client/pages/books/components/filters";
import BooksCount from "@/client/pages/books/components/Book-Count";
import BooksCard from "@/client/pages/books/components/Book-Card";
import BooksPagination from "@/client/pages/books/components/pagination";

import { BooksPageMetaData } from "@/client/core/constants/metadata";

// Books page component
function BooksPage() {
    return (
        <>
            <Helmet>
                <title>
                    {BooksPageMetaData.title}
                </title>
                <meta name="description" content={BooksPageMetaData.description} />
                <meta name="keywords" content={BooksPageMetaData.keywords.join(" ,")} />
            </Helmet>
            <main className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-10 z-20 lg:min-w-8xl lg:max-w-8xl px-4 mb-32">
                <h1 className="scroll-m-20 text-center text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-balance max-w-lg lg:max-w-2xl mx-5 lg:mx-12">
                    Books
                </h1>
                <p className="leading-7 text-center lg:text-base text-xs max-w-lg lg:max-w-2xl mx-5 lg:mx-12 text-muted-foreground">
                    Access thousends of scientific books, research papers, <br />
                    and academic publications-all in one place.
                </p>
                <BooksCount />
                <BooksFilter />
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <BooksCard key={index} />
                    ))}
                </div>
                <BooksPagination />
            </main>
        </>
    );
};

export default BooksPage;