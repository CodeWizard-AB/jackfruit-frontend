import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { Highlighter } from "../ui/highlighter";

export default function Hero() {
	return (
		<section className="flex items-center justify-center overflow-hidden py-10 pt-30 relative">
			<Spotlight
				className="left-0 -top-10 md:-top-30 xl:-top-10"
				fill="#ffd24a"
			/>
			<GridPattern
				width={60}
				height={60}
				strokeDasharray="5"
				className={cn(
					"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-50 lg:opacity-100"
				)}
			/>
			<div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0 z-0">
				<div className="my-auto">
					<div
						className={cn(
							"group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
						)}
					>
						<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
							<span>✨ Just Released JackFruit</span>
							<ArrowUpRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedShinyText>
					</div>
					<h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-7xl font-semibold leading-[1.2]! tracking-tighter">
						Build <ContainerTextFlip words={["better", "modern", "smarter"]} />{" "}
						<Highlighter action="underline" color="#ffd24a">
							<span className="text-5xl lg:text-8xl font-bold bg-linear-to-br from-primary to-white bg-clip-text text-transparent">
								Softwares
							</span>
						</Highlighter>
						, Faster Than Ever
					</h1>
					<p className="mt-6 max-w-[60ch] text-lg">
						We are a full-spectrum innovation studio helping founders and
						enterprises build intelligent, scalable, and design-driven solutions
						that transform industries
					</p>
					<div className="mt-12 flex items-center gap-4">
						<Button size="lg" className="text-base">
							Talk to an Expert
							<ArrowUpRight className="h-5! w-5!" />
						</Button>
					</div>
				</div>
				<div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-15rem)] bg-accent rounded-xl overflow-hidden border">
					<video
						className="w-full h-full object-cover"
						autoPlay
						muted
						loop
						playsInline
					>
						<source
							src="https://ik.imagekit.io/xp2qigjdg/jackfruit-videos/video-3.mp4?updatedAt=1760752075294"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
		</section>
	);
}
