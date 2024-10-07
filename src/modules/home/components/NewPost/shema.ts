import { z } from "zod";

export const PostSchema = z.object({
  visibility: z.string(),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters long" })
    .url({ message: "Content must be a valid URL" }),
});
