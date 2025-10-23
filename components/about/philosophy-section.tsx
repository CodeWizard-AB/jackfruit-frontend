import { values } from "@/lib/content";
import SectionHeadline from "../home/section-headline";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function PhilosophySection() {
	return (
		<section className="container">
			<SectionHeadline
				title="Our Philosophy"
				description="The principles that guide everything we do"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{values.map((value, index) => (
					<Card
						key={index}
						className="transition-all duration-300 hover:-translate-y-1"
					>
						<CardHeader className="space-y-4">
							<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
								<value.icon className="w-6 h-6 text-primary" />
							</div>
							<CardTitle className="text-xl">{value.title}</CardTitle>
							<CardDescription className="leading-relaxed">
								{value.description}
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		</section>
	);
}
