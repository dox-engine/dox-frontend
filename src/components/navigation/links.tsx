import { LinkData } from "@/src/data/link";
import { Button } from "@/src/components/ui/button";

import { Fragment } from "react";
import { Link } from "react-router";

function Links() {
    return (
        <ul className="flex flex-row gap-x-1.5 md:gap-x-5">
            {LinkData.map((val) => (
                <Fragment key={val.id}>
                    <li>
                        <Button asChild variant="link" size="default" className="cursor-pointer font-IBM">
                            <Link to={val.to}>
                                {val.text}
                            </Link>
                        </Button>
                    </li>
                </Fragment>
            ))}
        </ul>
    );
};

export default Links;