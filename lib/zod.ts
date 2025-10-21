import * as z from "zod";

export const contactFormSchema = z.object({
	name: z.string(),
	email: z.email(),
	budget: z.number(),
	message: z.string(),
});
