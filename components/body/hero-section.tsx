import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/spotlight";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { Highlighter } from "../ui/highlighter";
import { Separator } from "../ui/separator";
import { BorderBeam } from "../ui/border-beam";

export default function HeroSection() {
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
			<div className="container grid lg:grid-cols-2 gap-12 z-0">
				<div className="my-auto text-center lg:text-left">
					<div
						className={cn(
							"group rounded-full w-max border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mx-auto lg:mx-0"
						)}
					>
						<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
							<span className="text-sm">✨ Just Released JackFruit</span>
							<ArrowUpRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedShinyText>
					</div>
					<h1 className="mt-6 text-4xl md:text-5xl lg:text-[2.75rem] xl:text-7xl font-semibold leading-[1.2]! tracking-tighter">
						<span className="block">
							Build{" "}
							<ContainerTextFlip words={["better", "modern", "smarter"]} />
						</span>
						<Highlighter action="underline" color="#ffd24a" isView>
							<span className="text-6xl lg:text-8xl font-bold bg-linear-to-br from-primary to-white bg-clip-text text-transparent">
								Softwares,
							</span>
						</Highlighter>
						<span className="mt-2 block">Faster Than Ever</span>
					</h1>
					<p className="mt-6 text-lg">
						We are a full-spectrum innovation studio helping founders and
						enterprises build intelligent, scalable, and design-driven solutions
						that transform industries
					</p>
					<div className="mt-10 mb-10 flex items-center gap-4 justify-center lg:justify-start">
						<Button size="lg" className="text-base">
							Talk to an Expert
							<ArrowUpRight className="h-5! w-5!" />
						</Button>
					</div>
					<div className="flex items-center justify-center lg:justify-start gap-8">
						<div className="text-center group cursor-pointer">
							<div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">
								500+
							</div>
							<div className="text-sm text-[#A0A0A0]">Projects Delivered</div>
						</div>
						<Separator orientation="vertical" className="h-12 bg-primary" />
						<div className="text-center group cursor-pointer">
							<div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">
								98%
							</div>
							<div className="text-sm text-[#A0A0A0]">Client Satisfaction</div>
						</div>
						<Separator orientation="vertical" className="h-12 bg-primary" />
						<div className="text-center group cursor-pointer">
							<div className="text-3xl font-bold text-gold group-hover:scale-110 transition-transform">
								24/7
							</div>
							<div className="text-sm text-[#A0A0A0]">Support Available</div>
						</div>
					</div>
				</div>
				<div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-15rem)] bg-accent rounded-xl overflow-hidden border relative">
					<BorderBeam
						size={500}
						borderWidth={2}
						className="from-transparent via-primary to-transparent"
					/>
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
