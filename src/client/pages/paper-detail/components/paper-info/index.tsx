import { Badge } from "@/client/components/ui/badge";

import InfoCard from "@/client/pages/paper-detail/components/paper-info/info-card"
import InfoTable from "@/client/pages/paper-detail/components/paper-info//info-table";

import { DownloadIcon, EyeIcon } from "@phosphor-icons/react";

function PaperInfo() {
    return (
        <div className="flex flex-col justify-start items-start gap-6">
            <Badge>
                Computer Science
            </Badge>
            <h1 className="scroll-m-20 text-lg sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-balance">
                Attention is All you need
            </h1>
            <p className="leading-7 lg:text-base text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center w-full gap-x-4 md:gap-y-0 gap-y-4">
                <InfoCard
                    IconComp={DownloadIcon}
                    title="25.4K"
                    description="Downloads"
                />
                <InfoCard
                    IconComp={EyeIcon}
                    title="25.4K"
                    description="Views"
                />
                <InfoCard
                    IconComp={DownloadIcon}
                    title="25.4K"
                    description="Date Added"
                />
            </div>
            <InfoTable />
        </div>
    );
};

export default PaperInfo;