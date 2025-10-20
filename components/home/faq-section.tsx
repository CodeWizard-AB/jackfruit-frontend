"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";
import { faq } from "@/lib/content";
import { useState } from "react";
import SectionHeadline from "./section-headline";

export default function FaqSection() {
	const [value, setValue] = useState<string>();

	return (
		<section>
			<div className="flex items-center justify-center">
				<div className="container">
					<SectionHeadline title="Frequently Asked Questions" description="Find answers to common questions" />

					<div className="mt-6 w-full grid md:grid-cols-2 gap-x-10">
						<Accordion
							type="single"
							collapsible
							className="w-full"
							value={value}
							onValueChange={setValue}
						>
							{faq
								.slice(0, faq.length / 2)
								.map(({ question, answer }, index) => (
									<AccordionItem key={question} value={`question-${index}`}>
										<AccordionPrimitive.Header className="flex">
											<AccordionPrimitive.Trigger
												className={cn(
													"flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
													"text-start text-lg"
												)}
											>
												{question}
												<PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
											</AccordionPrimitive.Trigger>
										</AccordionPrimitive.Header>
										<AccordionContent className="text-base text-muted-foreground text-pretty">
											{answer}
										</AccordionContent>
									</AccordionItem>
								))}
						</Accordion>

						<Accordion
							type="single"
							collapsible
							className="w-full"
							value={value}
							onValueChange={setValue}
						>
							{faq.slice(faq.length / 2).map(({ question, answer }, index) => (
								<AccordionItem key={question} value={`question-${index + 5}`}>
									<AccordionPrimitive.Header className="flex">
										<AccordionPrimitive.Trigger
											className={cn(
												"flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
												"text-start text-lg"
											)}
										>
											{question}
											<PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
										</AccordionPrimitive.Trigger>
									</AccordionPrimitive.Header>
									<AccordionContent className="text-base text-muted-foreground text-pretty">
										{answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
}
