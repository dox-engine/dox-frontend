import type { Icon } from "@phosphor-icons/react";

function InfoCard({
    IconComp,
    title,
    description
}: {
    IconComp: Icon;
    title: string;
    description: string;
}) {
    return (
        <div className="border border-border rounded-[8px] p-3 bg-card flex flex-row justify-start items-center gap-x-2 w-full">
            <div className="bg-accent p-2 rounded-[8px]">
                <IconComp size={20} />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h3 className="text-sm">
                    {title}
                </h3>
                <span className="text-xs text-muted-foreground">
                    {description}
                </span>
            </div>
        </div>
    );
};

export default InfoCard;