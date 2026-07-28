import { Button } from "@/client/components/ui/button";

import ContactCard from "@/client/pages/contact/contact-card";
import MessageForm from "@/client/pages/contact/message-form";

import {
    PaperPlaneTiltIcon,
    EnvelopeSimpleIcon,
    LinkSimpleHorizontalIcon,
    PaperPlaneRightIcon
} from "@phosphor-icons/react";

function ContactContent() {
    return (
        <section className="w-full grid grid-cols-5 gap-y-6 gap-x-10">
            <ContactCard className="md:col-start-2 md:col-span-3 col-span-5">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <PaperPlaneTiltIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Contact Information
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        You can contact us directly through the channels below.
                        We usualy respond within 24 hours.
                    </p>
                    <div className="flex flex-row justify-between items-center w-full bg-accent rounded-[8px] p-4 border border-border">
                        <div className="flex flex-row justify-center gap-x-4">
                            <div className="bg-card rounded-[8px] p-4">
                                <EnvelopeSimpleIcon size={32} />
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <h4 className="scroll-m-20 text-lg font-normal tracking-tight">
                                    Email Address
                                </h4>
                                <span className="text-sm font-normal tracking-tight">
                                    info@dox-engine.ir
                                </span>
                            </div>
                        </div>
                        <Button>
                            <LinkSimpleHorizontalIcon size={24} />
                        </Button>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full bg-accent rounded-[8px] p-4 border border-border">
                        <div className="flex flex-row justify-center gap-x-4">
                            <div className="bg-card rounded-[8px] p-4">
                                <PaperPlaneRightIcon size={32} />
                            </div>
                            <div className="flex flex-col justify-between items-start">
                                <h4 className="scroll-m-20 text-lg font-normal tracking-tight">
                                    Telegram
                                </h4>
                                <span className="text-sm font-normal tracking-tight">
                                    @dox-engine
                                </span>
                            </div>
                        </div>
                        <Button>
                            <LinkSimpleHorizontalIcon size={24} />
                        </Button>
                    </div>
                </div>
            </ContactCard>
            <MessageForm />
        </section>
    );
};

export default ContactContent;