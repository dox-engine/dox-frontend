// Importing global ui components
import { Button } from "@/client/components/ui/button";
import { ButtonGroup } from "@/client/components/ui/button-group";
import { Input } from "@/client/components/ui/input";
import { TooltipContent, TooltipTrigger, Tooltip } from "@/client/components/ui/tooltip";

// Importing icons from phsophor icons
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

// Importing local ui components
import BooksFilterTypes from "@/client/pages/books/components/filters/types";
import BooksFilterCategories from "@/client/pages/books/components/filters/categories";
import BooksFilterOrder from "@/client/pages/books/components/filters/order";

function BooksFilter() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-y-5 lg:gap-x-5">
            <div className="max-w-lg lg:max-w-2xl bg-card w-full py-3 px-4 flex flex-col border border-border justify-center rounded-[8px] items-center gap-y-4">
                <ButtonGroup className="w-full gap-x-3" orientation="normal">
                    <Input
                        placeholder="Search your book or paper..."
                        id="searchBar"
                        name="search_bar"
                    />
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="outline" aria-label="Search">
                                <MagnifyingGlassIcon />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Search</p>
                        </TooltipContent>
                    </Tooltip>
                </ButtonGroup>
            </div>
            <BooksFilterTypes />
            <BooksFilterCategories />
            <BooksFilterOrder />
        </div>
    );
};

export default BooksFilter;