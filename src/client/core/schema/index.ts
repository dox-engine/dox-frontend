import * as z from "zod";

const messageFormSchema = z.object({
    full_name: z.string({
        error: "Please fill this section"
    }).min(3, {
        error: "Min length for this field is 3!"
    }).max(32, {
        error: "Max length for this field is 32!"
    }),
    email: z.email({
        error: "Please enter a valid email"
    }).min(5, {
        error: "Min length for this field is 5!"
    }).max(128, {
        error: "Max length for this field is 128!"
    }),
    subject: z.string({
        error: "Please fill this section"
    }).min(3, {
        error: "Min length for this field is 3!"
    }).max(32, {
        error: "Max length for this field is 32!"
    }),
    message: z.string({
        error: "Please fill this section"
    }).min(5, {
        error: "Min length for this field is 3!"
    }).max(256, {
        error: "Max length for this field is 256!"
    }),
});

export {
    messageFormSchema
};