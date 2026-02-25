import { Link } from "react-router";
import { Button } from "../ui/button";

function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-5 mx-5">
            <h1 className="text-center text-6xl sm:text-8xl font-IBM animate-bounce">
                404
            </h1>
            <p className="font-IBM text-center text-xs sm:text-sm">
                Looks like you've ventured into the unknown digital realm.
            </p>
            <Button className="cursor-pointer mt-5 font-IBM" asChild>
                <Link to={"/"}>
                    Return to home
                </Link>
            </Button>
        </div>
    );
};

export default NotFound;