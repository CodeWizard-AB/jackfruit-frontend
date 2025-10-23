import { services } from "@/lib/content";
import SectionHeadline from "../home/section-headline";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import DynamicImage from "../ui/DynamicImage";

export default function ServiceListSection() {
	return (
		<section className="container">
			<SectionHeadline
				title="Core Services"
				description="Comprehensive solutions for modern challenges"
			/>
			<div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
				{services.map((service) => (
					<div
						key={service.title}
						className="flex flex-col-reverse md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
					>
						<DynamicImage
							containerClassName="w-full h-80 md:h-[500px]"
							childClassName="rounded-xl"
							src={service.image}
							alt={service.title}
						/>
						<div className="basis-1/2 shrink-0">
							<div
								className={cn(
									"group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
								)}
							>
								<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
									<span className="text-primary md:text-xl">•</span>
									<span className="text-sm ml-2">{service.subtitle}</span>
								</AnimatedShinyText>
							</div>
							<h4 className="my-3 text-2xl md:text-4xl font-semibold tracking-tight">
								{service.title}
							</h4>
							<p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
								{service.longDescription}
							</p>
							<Button asChild size="lg" className="mt-6 gap-3">
								<Link href={""}>
									Book a call <ArrowRight />
								</Link>
							</Button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
