import { team } from "@/lib/content";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import SectionHeadline from "../home/section-headline";

export default function TeamSection() {
	return (
		<section className="container">
			<SectionHeadline
				title="The Team"
				description="Experts united by a passion for innovation"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
				{team.map((group, index) => (
					<Card
						key={index}
						className="hover-elevate active-elevate-2 transition-all"
						data-testid={`card-team-${index}`}
					>
						<CardHeader className="space-y-4">
							<CardTitle className="text-2xl text-gold">{group.role}</CardTitle>
							<CardDescription className="text-base leading-relaxed">
								{group.members}
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
