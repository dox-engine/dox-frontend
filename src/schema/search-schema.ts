import * as z from "zod";

export const searchSchema = z.object({
    query: z
        .string()
        .min(3, "Book title must be at least 3 characters.")
        .max(128, "Book title must be at most 128 characters."),
});