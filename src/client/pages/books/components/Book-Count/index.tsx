// Importing component from animate-ui
import { CountingNumber } from "@/client/components/animate-ui/primitives/texts/counting-number";

// Importing book icon from phosphor icons
import { BookOpenIcon } from "@phosphor-icons/react";

function BooksCount() {
    return (
        <div className="bg-card border border-border px-4 py-3 rounded-[8px] flex flex-row justify-center items-center gap-x-2">
            <BookOpenIcon size={25} />
            <CountingNumber className="text-sm" number={103410} />
            <span className="text-sm">
                Books available
            </span>
        </div>
    );
};

export default BooksCount;