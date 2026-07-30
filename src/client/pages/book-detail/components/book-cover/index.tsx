import FALLBACK from "@/client/assets/images/fallback/fallback.jpg";

import { Button } from "@/client/components/ui/button";

import { ArrowSquareOutIcon, DownloadIcon, EyeIcon } from "@phosphor-icons/react";

function BookCover() {
    return (
        <div className="bg-card border border-border rounded-[8px] p-5 flex flex-col justify-center items-center gap-y-4">
            <img src={FALLBACK} alt="" className="object-center object-cover aspect-square size-96 rounded-[8px]" />
            <Button variant="outline" className="w-full">
                <EyeIcon size={28} />
                View Book
                <ArrowSquareOutIcon size={28} />
            </Button>
            <Button variant="default" className="w-full">
                <DownloadIcon size={28} />
                Download PDF
            </Button>
        </div>
    );
};

export default BookCover;