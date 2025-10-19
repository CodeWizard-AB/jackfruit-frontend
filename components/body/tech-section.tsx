import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { CometCard } from "../ui/comet-card";
import { GlowingEffect } from "../ui/glowing-effect";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";
import SectionHeadline from "./section-headline";
import { MagicCard } from "../ui/magic-card";
import { Marquee } from "../ui/marquee";
import { skills } from "@/lib/content";

export default function TechSection() {
	return (
		<section className="container mx-auto">
			<SectionHeadline
				title="Our Tech Stack"
				description="Built with industry-leading technologies"
			/>
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
				<CometCard>
					<div className="relative rounded-xl">
						<BorderBeam
							size={500}
							className="from-transparent via-primary to-transparent"
						/>
						<Terminal>
							<TypingAnimation>
								&gt; Initializing JackFruit Environment...
							</TypingAnimation>
							<AnimatedSpan className="text-green-500">
								✔ System check complete — all dependencies stable.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Framework verified — Next.js detected.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Tailwind CSS configuration confirmed.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Shadcn UI components integrated successfully.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Performance modules optimized for production.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Performance modules optimized for production.
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Updating tailwind.config.ts
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Updating app/globals.css
							</AnimatedSpan>
							<AnimatedSpan className="text-green-500">
								✔ Installing dependencies.
							</AnimatedSpan>
							<AnimatedSpan className="text-blue-500">
								↳ Generated core file:{" "}
								<span className="pl-2">/lib/system/utils.ts</span>
							</AnimatedSpan>
							<AnimatedSpan className="text-blue-500">
								↳ Compiling dynamic interfaces and design tokens...
							</AnimatedSpan>
							<TypingAnimation className="text-muted-foreground">
								🚀 JackFruit Core initialized successfully.
							</TypingAnimation>
							<TypingAnimation className="text-muted-foreground">
								You may now build something extraordinary.
							</TypingAnimation>
						</Terminal>
					</div>
				</CometCard>

				<div className="mt-6 [mask-image:linear-gradient(to_right,transparent,#030712_10%,#030712_90%,black,transparent)]">
					<Marquee pauseOnHover className="[--duration:30s]">
						{skills.slice(0, 4).map((skill) => (
							<Card key={skill.name} src={skill.src} name={skill.name} />
						))}
					</Marquee>
					<Marquee pauseOnHover reverse className="[--duration:30s]">
						{skills.slice(4).map((skill) => (
							<Card key={skill.name} src={skill.src} name={skill.name} />
						))}
					</Marquee>
				</div>
			</div>
		</section>
	);
}

function Card({ src, name }: { src: string; name: string }) {
	return (
		<div className="relative border-border rounded-md">
			<MagicCard gradientFrom="#fc4a1a" gradientTo="#f7b733">
				<div className="p-5 text-center">
					<figure>
						<Image
							src={src}
							alt={name}
							className="mb-1"
							width={150}
							height={150}
						/>
						<figcaption>{name}</figcaption>
					</figure>
				</div>
			</MagicCard>
		</div>
	);
}
