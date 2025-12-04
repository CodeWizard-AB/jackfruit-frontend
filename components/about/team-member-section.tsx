import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Image from "next/image";
import SectionHeadline from "../home/section-headline";
import { Button } from "../ui/button";
import { Linkedin, Mail } from "lucide-react";
import { coreMembers } from "@/lib/content";
import Link from "next/link";

export default function TeamMemberSection() {
	return (
		<section className="container">
			<SectionHeadline
				title="Leadership Team"
				description="Experienced operators and technologists guiding the company’s vision and execution."
			/>

			<div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
				{coreMembers.map((leader) => (
					<Card
						key={leader.name}
						className="h-full pt-0 border-border/60 bg-card/70 backdrop-blur-xl overflow-hidden flex flex-col"
					>
						<div className="relative h-72 md:h-80 xl:h-56 w-full">
							<Image
								src={leader.photo}
								alt={leader.name}
								fill
								className="object-top object-cover"
								sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
							/>
						</div>

						<CardHeader className="space-y-4 flex-1">
							<div className="space-y-1">
								<p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
									{leader.role}
								</p>
								<CardTitle className="text-lg font-semibold">
									{leader.name}
								</CardTitle>
							</div>

							<CardDescription className="text-foreground/90 leading-relaxed">
								<div className="flex gap-6">
									<Button
										asChild
										variant="outline"
										className="font-medium border border-primary/60 bg-transparent hover:bg-primary/5"
									>
										<Link
											href={leader.linkedin}
											target="_blank"
											rel="noreferrer"
										>
											<Linkedin className="size-4" />
											<span>LinkedIn</span>
										</Link>
									</Button>
									<Button
										asChild
										variant="outline"
										className="font-medium border border-primary/60 bg-transparent hover:bg-primary/5"
									>
										<Link href={`mailto:${leader.email}`}>
											<Mail className="size-4" />
											<span>Email</span>
										</Link>
									</Button>
								</div>
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
