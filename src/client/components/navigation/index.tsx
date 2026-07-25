import Navbar from "@/client/components/navigation/navbar";
import NavbarPhone from "@/client/components/navigation/navbar-phone";

import { Link } from "react-router";

function Navigation() {
    return (
        <nav className="w-full flex flex-row justify-between items-center px-5 md:px-10 lg:px-20 py-10 z-20">
            <Link to="/" className="scroll-m-20 text-center text-2xl md:text-4xl font-extrabold tracking-tight text-balance">
                DOX-ENGINE
            </Link>
            <div className="block md:hidden">
                <NavbarPhone />
            </div>
            <div className="hidden md:block">
                <Navbar />
            </div>
        </nav>
    );
};

export default Navigation;