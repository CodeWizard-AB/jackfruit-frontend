import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
	return (
		<section className="container">
			<div className="max-w-4xl text-center mx-auto">
				<h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
					<span className="bg-linear-to-br from-primary to-white bg-clip-text text-transparent">
						Let's Build the Future Together
					</span>
				</h1>
				<p className="mb-12">
					Streamline your operations, reduce manual work, and focus on what
					matters most. Join teams that have already saved thousands of hours.
				</p>
				<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<Button size="lg">
						Get Started Free
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-gray-700 text-white hover:bg-slate-900/50 bg-slate-900/30"
					>
						Watch Demo
					</Button>
				</div>
			</div>
		</section>
	);
}
