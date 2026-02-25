import { searchSchema } from "@/src/schema/search-schema";

import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

import { useForm } from "@tanstack/react-form";

function SearchBar() {
    const form = useForm({
        defaultValues: {
            query: "",
        },
        validators: {
            onSubmit: searchSchema,
        },
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
        }} className="max-w-3xl mx-auto flex flex-row justify-center items-center gap-x-2">
            <FieldGroup>
                <form.Field
                    name="query"
                    children={(field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                        return (
                            <Field data-invalid={isInvalid}>
                                <FieldLabel htmlFor={field.name} className="font-IBM">
                                    Book Title
                                </FieldLabel>
                                <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    aria-invalid={isInvalid}
                                    className="font-IBM"
                                    placeholder="Search whatever you want..."
                                    autoComplete="off"
                                />
                                <FieldDescription className="font-IBM">
                                    Provide a concise title for your book.
                                </FieldDescription>
                                {isInvalid && <FieldError errors={field.state.meta.errors} />}
                            </Field>
                        );
                    }}
                />
            </FieldGroup>
            <Button className="mb-0.5 cursor-pointer uppercase font-IBM" variant="default" size="default">
                Search
            </Button>
        </form>
    );
};

export default SearchBar;