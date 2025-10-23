export default function StorySection() {
	return (
		<section className="container">
			<div className="grid md:grid-cols-2 gap-16 items-center">
				<div className="space-y-6">
					<h2 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-br from-primary to-white bg-clip-text">
						Our Story
					</h2>
					<div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
						<p>
							JackFruit was born from a simple observation: businesses were
							drowning in complexity while the solutions they needed remained
							frustratingly out of reach.
						</p>
						<p>
							We set out to change that. By combining cutting-edge AI technology
							with human-centered design, we create software that doesn&apos;t just
							work—it transforms.
						</p>
						<p>
							Today, we partner with forward-thinking companies to build the
							intelligent systems that power tomorrow&apos;s success stories.
						</p>
					</div>
				</div>

				<div className="relative h-96 rounded-xl bg-gradient-to-br from-gold/20 to-transparent border border-border overflow-hidden">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(179,122,38,0.2),transparent_70%)]" />
				</div>
			</div>
		</section>
	);
}
