import * as z from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.min(3, "Name must be at least 3 characters")
		.max(50, "Name must be at most 50 characters"),
	email: z.email().min(1, "Email is required"),
	budget: z.string().min(1, "Budget is required"),
	message: z
		.string()
		.min(1, "Message is required")
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be at most 500 characters"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
