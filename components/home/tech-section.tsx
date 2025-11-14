import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { CometCard } from "../ui/comet-card";
import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal";
import SectionHeadline from "./section-headline";
import { MagicCard } from "../ui/magic-card";
import { Marquee } from "../ui/marquee";
import { skills } from "@/lib/content";

export default function TechSection() {
	return (
		<section className="container">
			<SectionHeadline
				title="Our Tech Stack"
				description="Built with industry-leading technologies"
			/>
			<div className="grid lg:items-center lg:justify-center lg:grid-cols-2 grid-cols-1 lg:gap-12">
				<div className="relative rounded-xl w-full overflow-hidden">
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

				<div className="mt-6 [mask-image:linear-gradient(to_right,transparent,#030712_10%,#030712_90%,black,transparent)]">
					<Marquee pauseOnHover className="[--duration:30s]">
						{skills.slice(0, skills.length / 2).map((skill) => (
							<Card key={skill.name} src={skill.src} name={skill.name} />
						))}
					</Marquee>
					<Marquee pauseOnHover reverse className="[--duration:30s]">
						{skills.slice(skills.length / 2).map((skill) => (
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
		<div className="relative border-border border-[1px] rounded-md">
			<MagicCard gradientFrom="#ffd24a" gradientTo="#ffd24a">
				<div className="p-5 text-center">
					<figure className="relative mb-1 w-24 md:w-32 aspect-square">
						<Image src={src} alt={name} fill />
					</figure>
					<p>{name}</p>
				</div>
			</MagicCard>
		</div>
	);
}
