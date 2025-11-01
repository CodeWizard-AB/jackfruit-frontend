import { featuredProjects } from "@/lib/content";
import { Card } from "../ui/card";
import DynamicImage from "../ui/DynamicImage";

export default function ProjectListSection() {
	return (
		<section className="container">
			<div>
				{featuredProjects.map((project, index) => (
					<Card
						key={index}
						className="hover-elevate active-elevate-2 transition-all duration-300 overflow-hidden md:pl-6 mb-10"
					>
						<div className="grid md:grid-cols-2 gap-8">
							<DynamicImage
								src={project.imageUrl!}
								alt={project.title}
								childClassName="object-top rounded-lg"
							/>

							<div className="p-8 space-y-6">
								<div className="space-y-2">
									<h3 className="text-3xl font-bold">{project.title}</h3>
									<p className="text-lg text-muted-foreground">
										{project.industry}
									</p>
								</div>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary"
										>
											{tag}
										</span>
									))}
								</div>

								<div className="space-y-4">
									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Challenge
										</h4>
										<p className="text-muted-foreground">{project.problem}</p>
									</div>

									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Solution
										</h4>
										<p className="text-muted-foreground">{project.solution}</p>
									</div>

									<div>
										<h4 className="font-semibold text-foreground mb-2">
											Impact
										</h4>
										<p className="text-muted-foreground">{project.impact}</p>
									</div>
								</div>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
}
