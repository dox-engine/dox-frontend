import * as React from "react";

// Importing cn function(tailwindcss utility) from core
import { cn } from "@/client/core/lib/utils";

function ContactCard({
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

export default ContactCard;