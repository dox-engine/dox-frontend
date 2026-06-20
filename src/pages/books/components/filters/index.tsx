import { Button } from "@/src/components/ui/button";
import { ButtonGroup } from "@/src/components/ui/button-group";
import { Input } from "@/src/components/ui/input";
import { TooltipContent, TooltipTrigger, Tooltip } from "@/src/components/ui/tooltip";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

import BooksFilterTypes from "@/src/pages/books/components/filters/types";
import BooksFilterCategories from "@/src/pages/books/components/filters/categories";
import BooksFilterOrder from "@/src/pages/books/components/filters/order";

function BooksFilter() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-y-5 lg:gap-x-5">
            <div className="max-w-lg lg:max-w-2xl bg-card w-full py-3 px-4 flex flex-col border border-border justify-center rounded-[8px] items-center gap-y-4">
                <ButtonGroup className="w-full">
                    <Input
                        placeholder="Search your book or paper..."
                        id="searchBar"
                        name="search_bar"
                    />
                    <Tooltip>
                        <TooltipTrigger asChild>
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