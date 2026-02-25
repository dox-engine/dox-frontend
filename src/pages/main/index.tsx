import SearchBar from "@/src/components/searchBar";

function HomePage() {
    return (
        <main className="flex flex-col justify-center items-center h-full w-full gap-y-12">
            <div className="flex flex-col justify-center items-center max-w-md md:max-w-2xl">
                <h1 className="font-IBM text-2xl md:text-4xl text-center tracking-tight text-balance">
                    Discover Scientific Knowledge
                </h1>
                <p className="leading-7 not-first:mt-6 font-IBM text-center text-muted-foreground text-xs md:text-sm">
                    Access thousands of scientific books, research papers, and academic publications—all in one place.
                </p>
            </div>
            <div className="w-full">
                <SearchBar />
            </div>
        </main>
    );
};

export default HomePage;