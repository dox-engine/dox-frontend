import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";

import { Button } from "@/src/components/ui/button";

import { ListIcon } from "@phosphor-icons/react";

import { NavigationData } from "@/src/core/constants";

import { Link } from "react-router";

function NavbarPhone() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="default">
                    <ListIcon />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Navigation menu
                    </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col justify-center items-center gap-y-3">
                    {NavigationData.map((item) => (
                        <li key={item.id}>
                            <Button variant="link" asChild>
                                <Link to={item.href}>
                                    {item.title}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </SheetContent>
        </Sheet>
    );
};

export default NavbarPhone;