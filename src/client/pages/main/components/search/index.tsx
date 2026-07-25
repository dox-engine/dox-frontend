// Global ui animate-ui components
import { CountingNumber } from "@/client/components/animate-ui/primitives/texts/counting-number";

// Global ui shadcn components
import { Button } from "@/client/components/ui/button";
import { ButtonGroup } from "@/client/components/ui/button-group";
import { Input } from "@/client/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/client/components/ui/tooltip";

// Icons from phosphor icons
import { MagnifyingGlassIcon, CheckCircleIcon } from "@phosphor-icons/react";

// Main search page
// By searching in this input, and enter user will be redirected
// To books page with specific items that are found in that page
function MainSearch() {
    return (
        <div className="max-w-lg lg:max-w-2xl bg-card w-full py-3 px-4 flex flex-col justify-center rounded-[8px] items-center gap-y-4">
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
            <div className="flex flex-row justify-start items-center w-full gap-x-2">
                <CheckCircleIcon size={19} className="w-fit shrink-0" />
                <small className="text-xs md:text-sm leading-5 font-medium">
                    Search among {" "}
                    <CountingNumber number={12100} /> {" "}
                    Books and {" "}
                    <CountingNumber number={103410} /> {" "}
                    Articles
                </small>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-x-2">
                <CheckCircleIcon size={19} className="w-fit shrink-0" />
                <small className="text-xs md:text-sm leading-5 font-medium">
                    You can search or request new boook
                </small>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-x-2">
                <CheckCircleIcon size={19} className="w-fit shrink-0" />
                <small className="text-xs md:text-sm leading-5 font-medium">
                    You can access to thousends of thousends articles and Scientific Papers
                </small>
            </div>
        </div>
    );
};

export default MainSearch;