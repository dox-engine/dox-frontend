import { NavigationData } from "@/client/core/constants/navigation";

import { Button } from "@/client/components/ui/button";

import { Link, useLocation } from "react-router";

import { cn } from "@/client/core/lib/utils";

function Navbar() {
    const location = useLocation();
    return (
        <ul className="flex flex-row justify-center items-center gap-x-3">
            {NavigationData.map((item) => (
                <li key={item.id}>
                    <Button
                        variant="link"
                        className={cn(
                            "text-sm",
                            location.pathname === item.href
                            ?
                            "underline"
                            :
                            "no-underline"
                        )}
                        asChild
                    >
                        <Link reloadDocument to={item.href}>
                            {item.title}
                        </Link>
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;