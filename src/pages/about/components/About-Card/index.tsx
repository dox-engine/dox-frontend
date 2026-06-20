import { cn } from "@/src/lib/utils";

import * as React from "react";

function AboutCard({
    children,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    children: React.ReactNode;
}) {
    return (
        <div className={cn(
            "bg-card border border-border p-8 rounded-[8px]",
            className
        )} {...props}>
            {children}
        </div>
    );
};

export default AboutCard;