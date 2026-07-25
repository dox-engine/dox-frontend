import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/client/components/ui/sheet";

import { Button } from "@/client/components/ui/button";

import { ListIcon } from "@phosphor-icons/react";

import { NavigationData } from "@/client/core/constants/navigation";

import { cn } from "@/client/core/lib/utils";

import { Link, useLocation } from "react-router";

function NavbarPhone() {
    const location = useLocation();
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
                            <Button
                                variant="link"
                                asChild
                                className={cn(
                                    "text-sm",
                                    location.pathname === item.href
                                    ?
                                    "underline"
                                    :
                                    "no-underline"
                                )}
                            >
                                <Link reloadDocument to={item.href}>
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