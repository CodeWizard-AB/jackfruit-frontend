"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormType, contactFormSchema } from "@/lib/zod";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "../ui/input-group";
import {
	ChartAreaIcon,
	DollarSignIcon,
	MailIcon,
	MessageCircle,
	PersonStandingIcon,
} from "lucide-react";

export default function ContactForm() {
	const form = useForm<ContactFormType>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			budget: "",
			message: "",
		},
		mode: "onChange",
	});

	const onSubmit = (data: ContactFormType) => {
		console.log(data);
	};

	return (
		<Card className="py-0">
			<CardContent className="p-6 md:p-8">
				<form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						{/* name */}
						<Controller
							name="name"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="name">Name</FieldLabel>
									<InputGroup>
										<InputGroupInput
											{...field}
											id="name"
											aria-invalid={fieldState.invalid}
											type="text"
											placeholder="Enter your name"
										/>
										<InputGroupAddon>
											<PersonStandingIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						{/* email */}
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<InputGroup>
										<InputGroupInput
											{...field}
											id="email"
											aria-invalid={fieldState.invalid}
											type="email"
											placeholder="Enter your email"
										/>
										<InputGroupAddon>
											<MailIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						{/* budget */}
						<Controller
							name="budget"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="budget">Budget</FieldLabel>
									<InputGroup>
										<InputGroupInput
											{...field}
											id="budget"
											aria-invalid={fieldState.invalid}
											type="number"
											placeholder="Enter your budget"
											min={0}
										/>
										<InputGroupAddon>
											<DollarSignIcon />
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						{/* message */}
						<Controller
							name="message"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="message">Message</FieldLabel>
									<InputGroup>
										<InputGroupTextarea
											{...field}
											id="message"
											placeholder="Enter your message"
											aria-invalid={fieldState.invalid}
										/>
										<InputGroupAddon align="block-end">
											<InputGroupText className="tabular-nums">
												{field.value.length}/1000 characters
											</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					</FieldGroup>
					<Button className="mt-6 w-full" size="lg">
						Submit
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
