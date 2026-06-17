import { NavigationData } from "@/src/core/constants";

import { Button } from "@/src/components/ui/button";

import { Link } from "react-router";

function Navbar() {
    return (
        <ul className="flex flex-row justify-center items-center gap-x-3">
            {NavigationData.map((item) => (
                <li key={item.id}>
                    <Button variant="link" className="text-sm" asChild>
                        <Link to={item.href}>
                            {item.title}
                        </Link>
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Navbar;