import { IconData } from "@/src/data/icon";
import { Button } from "@/src/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/src/components/ui/tooltip";

import { Link } from "react-router";
import { Fragment } from "react";

function NavigationIcons() {
    return (
        <ul className="flex flex-row gap-x-5">
            {IconData.map((val) => (
                <Fragment key={val.id}>
                    <li>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button asChild variant="ghost" size="icon" className="cursor-pointer">
                                    <Link to={val.to} target="_blank">
                                        {<val.icon />}
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="bottom">
                                <p className="font-IBM">
                                    {val.text}
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </li>
                </Fragment>
            ))}
        </ul>
    );
};

export default NavigationIcons;