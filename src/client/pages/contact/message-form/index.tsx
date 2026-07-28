import { messageFormSchema } from "@/client/core/schema";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/client/components/ui/field";
import { Input } from "@/client/components/ui/input";
import { Button } from "@/client/components/ui/button";
import { Textarea } from "@/client/components/ui/textarea";

import ContactCard from "@/client/pages/contact/contact-card";

import {
    HandDepositIcon
} from "@phosphor-icons/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/client/lib/utils";

function MessageForm() {
    const form = useForm<z.infer<typeof messageFormSchema>>({
        resolver: zodResolver(messageFormSchema),
        defaultValues: {
            full_name: "",
            email: "",
            subject: "",
            message: ""
        },
    });

    function onSubmitMessage(data: z.infer<typeof messageFormSchema>) {
        console.log(data);
        toast("Thanks for submitting your message", {
            position: "bottom-right"
        });
    };

    return (
        <>
            <ContactCard className="md:col-start-2 md:col-span-3 col-span-5">
                <div className="flex flex-col justify-center items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-3">
                        <HandDepositIcon size={28} />
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                            Send Us a Message
                        </h4>
                    </div>
                    <p className="leading-7 lg:text-sm text-xs text-start">
                        Have a question, suggestion, or collaboration proposal? Fill out the form below and we'll get back to you.
                    </p>
                    <form id="form-message-demo" onSubmit={form.handleSubmit(onSubmitMessage)} className="w-full">
                        <FieldGroup className="flex justify-center items-center">
                            <Controller
                                name="full_name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-message-demo-fullname">
                                            Full Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-message-demo-fullname"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your name"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-message-demo-email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-message-demo-email"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter your email address"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="subject"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-message-demo-subject">
                                            Subject
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="form-message-demo-subject"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Enter the subject"
                                            autoComplete="off"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="message"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="form-message-demo-message">
                                            Message
                                        </FieldLabel>
                                        <Textarea
                                            {...field}
                                            id="form-message-demo-message"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="Write your message..."
                                            className="min-h-30"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                        <span className={cn(
                                            "text-xs tracking-tight text-right",
                                            fieldState.invalid
                                            ?
                                            "text-destructive"
                                            :
                                            "text-muted-foreground"
                                        )}>
                                            {field.value.length}/256
                                        </span>
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                        <Field orientation="horizontal">
                            <Button type="submit" form="form-message-demo">
                                Submit
                            </Button>
                        </Field>
                    </form>
                </div>
            </ContactCard>
        </>
    );
};

export default MessageForm;