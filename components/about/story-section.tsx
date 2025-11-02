import SectionHeadline from "../home/section-headline";

export default function StorySection() {
	return (
		<section className="container">
			<SectionHeadline
				title="Our Story"
				description="The vision that drives everything we build"
			/>

			<div className="max-w-5xl mx-auto space-y-12">
				{/* Section 1: The Challenge */}
				<div className="relative pl-8 border-l-2 border-primary/20">
					<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
					<div className="space-y-4">
						<h3 className="text-2xl font-semibold text-foreground">
							The Challenge
						</h3>
						<p className="text-lg text-muted-foreground leading-loose">
							Jackfruit was born from an insight as simple as it was profound.
							Businesses across the world were drowning in complexity, weighed
							down by fragmented processes and solutions that remained
							frustratingly out of reach. Technology promised efficiency yet
							often delivered confusion. Potential for transformation existed
							yet remained unfulfilled.
						</p>
					</div>
				</div>

				{/* Section 2: The Question */}
				<div className="relative pl-8 border-l-2 border-primary/20">
					<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
					<div className="space-y-4">
						<h3 className="text-2xl font-semibold text-foreground">
							The Question
						</h3>
						<div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
							<p>
								We asked ourselves: what if technology could do more than serve?
							</p>
							<ul className="space-y-3 ml-6">
								<li className="flex items-center gap-3">
									<span className="text-primary">•</span>
									<span>
										What if it could{" "}
										<span className="font-medium text-foreground">
											elevate, illuminate, and empower
										</span>
										?
									</span>
								</li>
								<li className="flex items-center gap-3">
									<span className="text-primary">•</span>
									<span>
										What if intelligent systems could{" "}
										<span className="font-medium text-foreground">
											anticipate needs
										</span>{" "}
										and{" "}
										<span className="font-medium text-foreground">
											streamline operations
										</span>
										?
									</span>
								</li>
								<li className="flex items-center gap-3">
									<span className="text-primary">•</span>
									<span>
										What if we could{" "}
										<span className="font-medium text-foreground">
											unlock human creativity
										</span>{" "}
										at unprecedented scale?
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Section 3: Our Mission */}
				<div className="relative pl-8 border-l-2 border-primary/20">
					<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background animate-pulse" />
					<div className="space-y-4">
						<h3 className="text-2xl font-semibold text-foreground">
							Our Mission
						</h3>
						<p className="text-lg text-muted-foreground leading-loose">
							From this vision Jackfruit emerged. Our mission is to bridge the
							gap between human potential and technological capability—to create
							systems that are as thoughtful as they are intelligent. By uniting
							cutting-edge artificial intelligence, meticulous engineering, and
							human-centered design, we built a philosophy that values both{" "}
							<span className="font-medium text-foreground">
								brilliance and clarity, power and elegance
							</span>
							.
						</p>
					</div>
				</div>

				{/* Section 4: Our Impact */}
				<div className="relative pl-8 border-l-2 border-primary/20">
					<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-background" />
					<div className="space-y-4">
						<h3 className="text-2xl font-semibold text-foreground">
							Our Impact
						</h3>
						<p className="text-lg text-muted-foreground leading-loose">
							Over the years, we&apos;ve partnered with companies that share our
							hunger for progress—from visionary startups to established
							enterprises seeking to redefine their industries. Together, we
							build the platforms, systems, and experiences that power the
							ambitions of tomorrow. Every solution we deliver is designed to
							perform flawlessly, adapt effortlessly, and endure infinitely.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
