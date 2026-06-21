import { AvatarImage, Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";

import AboutCard from "@/src/pages/about/components/About-Card";

import {
    ChartDonutIcon,
    BookOpenIcon,
    CheckCircleIcon,
    CodeIcon,
    UsersIcon,
    ShieldCheckIcon
} from "@phosphor-icons/react";

function AboutContent() {
    return (
        <section className="w-full grid grid-cols-2 gap-y-6 gap-x-10">
            <AboutCard className="md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <ChartDonutIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Our Mission
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        Our mission is to break down the barriers of paywalls and
                        restrictions that limit access to scientific materials.
                        DOX-ENGINE provide a centralized platform to search and download books,
                        papers, and academic resources from across the web.
                    </p>
                </div>
            </AboutCard>
            <AboutCard className="md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <BookOpenIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            What We Offer
                        </h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-4">
                        <div className="flex flex-row justify-start items-center w-full gap-x-2">
                            <CheckCircleIcon size={19} className="w-fit shrink-0" />
                            <small className="text-xs md:text-sm leading-5 font-medium">
                                Access to thousands of books and papers
                            </small>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-x-2">
                            <CheckCircleIcon size={19} className="w-fit shrink-0" />
                            <small className="text-xs md:text-sm leading-5 font-medium">
                                Powerful and fast search engine
                            </small>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-x-2">
                            <CheckCircleIcon size={19} className="w-fit shrink-0" />
                            <small className="text-xs md:text-sm leading-5 font-medium">
                                Direct download links
                            </small>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-x-2">
                            <CheckCircleIcon size={19} className="w-fit shrink-0" />
                            <small className="text-xs md:text-sm leading-5 font-medium">
                                Constantly growing database
                            </small>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-x-2">
                            <CheckCircleIcon size={19} className="w-fit shrink-0" />
                            <small className="text-xs md:text-sm leading-5 font-medium">
                                Free and open for everyone
                            </small>
                        </div>
                    </div>
                </div>
            </AboutCard>
            <AboutCard className="md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <CodeIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Built With
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        DOX-ENGINE is built using modern web technologies to
                        to deliver a fast, clean, and reliable exprience.
                    </p>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        <Badge variant="default" className="bg-background dark:bg-foreground text-foreground dark:text-background px-2 py-1">
                            React
                        </Badge>
                        <Badge variant="default" className="bg-background dark:bg-foreground text-foreground dark:text-background px-2 py-1">
                            NestJs
                        </Badge>
                        <Badge variant="default" className="bg-background dark:bg-foreground text-foreground dark:text-background px-2 py-1">
                            Shadcn
                        </Badge>
                        <Badge variant="default" className="bg-background dark:bg-foreground text-foreground dark:text-background px-2 py-1">
                            Tailwindcss
                        </Badge>
                    </div>
                </div>
            </AboutCard>
            <AboutCard className="md:col-span-2 lg:col-span-1">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <UsersIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Developers
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        DOX-ENGINE is developed and maintained by the following individuals.
                    </p>
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        <div className="flex flex-row justify-center items-center gap-x-3">
                            <Avatar className="size-11">
                                <AvatarImage
                                    src="https://avatars.githubusercontent.com/u/105216969?v=4"
                                    alt="Maziyar Isanezhad"
                                />
                                <AvatarFallback>
                                    MI
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col justify-center items-start">
                                <h4 className="font-semibold tracking-tight text-base">
                                    Maziyar Isanezhad
                                </h4>
                                <span className="font-semibold tracking-tight text-sm text-muted-foreground">
                                    Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </AboutCard>
            <AboutCard className="col-span-2">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <ShieldCheckIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Disclaimer
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        DOX-ENGINE does not host any files on its servers. <br />
                        We only index content available publicly across the internet. <br />
                        All materials belong to their respective owners.
                    </p>
                </div>
            </AboutCard>
        </section>
    );
};

export default AboutContent;