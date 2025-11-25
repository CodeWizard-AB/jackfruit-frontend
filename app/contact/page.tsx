import ContactSection from "@/components/contact/contact-seciton";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
	title: "JACKFRUIT | Begin Your Journey with Our Team",
	description:
		"Connect with JACKFRUIT to explore bold collaborations and transform ideas into sophisticated, unforgettable digital experiences.",
};

export default function Contact() {
	return (
		<Fragment>
			<section className="flex items-center justify-center overflow-hidden pt-30 relative">
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
								<span className="text-sm">✨ Get in touch</span>
								<ArrowUpRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							</AnimatedShinyText>
						</div>
						<h1 className="mt-6 text-3xl md:text-6xl font-semibold leading-[1.2]! tracking-tighter">
							Let&apos;s build something{" "}
							<span className="text-5xl md:text-7xl font-bold bg-linear-to-br from-primary to-white bg-clip-text text-transparent block">
								Extraordinary
							</span>
							<span>Together</span>
						</h1>
						<p className="mt-6 text-lg leading-loose">
							At Jackfruit, we believe every great partnership begins with a
							conversation. Whether you&apos;re exploring a new digital idea,
							seeking technical guidance, or ready to bring a product to life,
							we&apos;re here to listen, understand, and deliver with clarity
						</p>
						<div className="mt-10 mb-10 flex items-center gap-4 justify-center lg:justify-start">
							<Link
								href={"https://calendly.com/jackfruit-1ech/30min"}
								target="_blank"
							>
								<Button size="lg" className="text-base">
									Talk to an Expert
									<ArrowUpRight className="h-5! w-5!" />
								</Button>
							</Link>
						</div>
					</div>
					<div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-15rem)] bg-accent rounded-xl overflow-hidden border relative">
						<BorderBeam
							size={400}
							borderWidth={2}
							className="from-transparent via-primary to-transparent"
						/>
						<video
							className="w-full h-full object-cover"
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
						>
							<source src="https://ik.imagekit.io/xp2qigjdg/jackfruit-videos/contact-video.mp4?updatedAt=1762104940633" />
							<source
								src="https://ik.imagekit.io/xp2qigjdg/jackfruit-videos/contact-video.mp4?updatedAt=1762104940633"
								type="video/webm"
							/>
						</video>
					</div>
				</div>
			</section>
			<ContactSection />
		</Fragment>
	);
}
