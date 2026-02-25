import { FaPlus, FaAlignJustify } from "react-icons/fa";

import NavigationIcons from "@/src/components/navigation/icons";
import Logo from "@/src/components/navigation/logo";
import Links from "@/src/components/navigation/links";

import ModeToggle from "@/src/components/mode-toggle";

import { Button } from "@/src/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/src/components/ui/sheet";

function Navigation() {
    return (
        <nav className="flex flex-row justify-between items-center">
            <div className="hidden lg:block">
                <Links />
            </div>
            <div className="lg:mr-14">
                <Logo />
            </div>
            <div className="hidden lg:flex flex-row items-center justify-center gap-x-5">
                <NavigationIcons />
                <Button className="cursor-pointer uppercase font-IBM" size="sm">
                    <FaPlus />
                    Request a book
                </Button>
                <ModeToggle />
            </div>
            <div className="flex flex-row justify-center items-center lg:hidden gap-x-3">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon-sm">
                            <FaAlignJustify />
                        </Button>
                    </SheetTrigger>
                    <SheetContent showCloseButton>
                        <SheetHeader>
                            <SheetTitle>
                                Dox-Engine Menu
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col justify-center items-center h-full">
                            <div>ff</div>
                        </div>
                    </SheetContent>
                </Sheet>
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navigation;