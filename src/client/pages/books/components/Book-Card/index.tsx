// Importing hooks from react root
import { useState } from "react";

// Importing global ui components
import { Badge } from "@/client/components/ui/badge";
import { Button } from "@/client/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/client/components/ui/card";

// Importing fallback image when actual image from server are not served
import IMAGE_FALLBACK from "@/client/assets/images/fallback/fallback.jpg";

// Importing icons from phosphor icons
import { BookIcon } from "@phosphor-icons/react";

function BooksCard() {
    const [imageFallback, setImageFallback] = useState<string>(IMAGE_FALLBACK);
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 col-span-1">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={imageFallback}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                onError={() => setImageFallback(IMAGE_FALLBACK)}
            />
            <Badge variant="default" className="[&>svg]:size-4! absolute top-5 left-5 bg-background dark:bg-foreground text-foreground dark:text-background px-2 py-1 z-40 text-xs">
                <BookIcon />
                EBOOK
            </Badge>
            <CardHeader>
                <CardTitle>
                    Design systems meetup
                </CardTitle>
                <CardDescription>
                    A practical talk on component APIs, accessibility, and shipping
                    faster.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">
                    View Event
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BooksCard;