"use client";

import { values } from "@/lib/content";
import SectionHeadline from "../home/section-headline";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BorderBeam } from "../ui/border-beam";
import * as motion from "motion/react-client";
import {
	useMotionValue,
	useSpring,
	useTransform,
	useMotionTemplate,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function PhilosophySection() {
	return (
		<section className="container relative">
			<SectionHeadline
				title="Our Philosophy"
				description="The principles that guide everything we do"
			/>

			{/* Enhanced Background Effects */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px] animate-pulse" />
				<div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[160px]" />
			</div>

			<div className="relative">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
					{values.map((value, index) => (
						<PhilosophyCard key={index} value={value} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}

function PhilosophyCard({
	value,
	index,
}: {
	value: (typeof values)[0];
	index: number;
}) {
	const Icon = value.icon;
	const cardRef = useRef<HTMLDivElement>(null);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 15 });
	const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 15 });

	const gradientX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
	const gradientY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

	const gradientBackground = useMotionTemplate`radial-gradient(circle at ${gradientX}% ${gradientY}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
		const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

		mouseX.set(mouseXRelative);
		mouseY.set(mouseYRelative);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	return (
		<motion.div
			ref={cardRef}
			initial={{ opacity: 0, y: 60, scale: 0.95 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{
				duration: 0.7,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative group"
		>
			<Card
				className={cn(
					"relative overflow-hidden border border-border/50 bg-card/60 backdrop-blur-2xl h-full",
					"transition-all duration-700 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
					"hover:shadow-primary/5"
				)}
				data-testid={`card-philosophy-${index}`}
			>
				{/* Mouse-following gradient */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
					style={{ background: gradientBackground }}
				/>

				{/* Animated border beam */}
				<BorderBeam
					size={250}
					borderWidth={1.5}
					duration={10}
					delay={index * 2}
					colorFrom="hsl(var(--primary))"
					colorTo="transparent"
					className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
				/>

				{/* Subtle gradient overlay */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
				</div>

				{/* Animated grid pattern */}
				<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[inherit]">
					<motion.div
						className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.08)_1px,transparent_0)] [background-size:32px_32px]"
						animate={{
							backgroundPosition: ["0 0", "32px 32px"],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "linear",
						}}
					/>
				</div>

				<CardHeader className="relative space-y-6 p-6 lg:p-8">
					{/* Icon Section */}
					<div className="relative flex items-start">
						<div className="relative flex-shrink-0">
							{/* Multi-layer glow rings */}
							<motion.div
								className="absolute -inset-6 bg-primary/15 rounded-3xl blur-2xl"
								animate={{
									scale: [1, 1.3, 1],
									opacity: [0.2, 0.4, 0.2],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.5,
								}}
							/>

							{/* Icon wrapper */}
							<motion.div
								className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 border-2 border-primary/30 flex items-center justify-center shadow-xl shadow-primary/15 backdrop-blur-sm"
								whileHover={{
									scale: 1.15,
									rotate: [0, -8, 8, -8, 0],
									transition: { duration: 0.5 },
								}}
							>
								<Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary drop-shadow-xl relative z-10" />

								{/* Animated shine overlay */}
								<motion.div
									className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent"
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>

								{/* Inner gradient ring */}
								<div className="absolute inset-[2px] rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</motion.div>

							{/* Decorative floating elements */}
							<motion.div
								className="absolute -top-1 -right-1 w-3 h-3 bg-primary/70 rounded-full blur-sm"
								animate={{
									y: [0, -8, 0],
									opacity: [0.6, 1, 0.6],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: "easeInOut",
									delay: index * 0.5,
								}}
							/>
							<motion.div
								className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/50 rounded-full blur-sm"
								animate={{
									y: [0, -6, 0],
									opacity: [0.4, 0.8, 0.4],
								}}
								transition={{
									duration: 2.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: index * 0.7,
								}}
							/>
						</div>
					</div>

					{/* Title Section */}
					<div className="space-y-3">
						<CardTitle className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500 relative inline-block">
							<span className="relative z-10">{value.title}</span>
							{/* Animated underline */}
							<motion.div
								className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full"
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								viewport={{ once: true }}
								transition={{
									duration: 0.8,
									ease: [0.22, 1, 0.36, 1],
								}}
							/>
						</CardTitle>
					</div>

					{/* Description */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<CardDescription className="text-sm lg:text-base leading-relaxed text-muted-foreground group-hover:text-foreground/85 transition-colors duration-500 relative z-10 font-light tracking-wide">
							{value.description}
						</CardDescription>
					</motion.div>

					{/* Decorative Elements */}
					{/* Bottom gradient line */}
					<motion.div
						className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
						initial={{ scaleX: 0 }}
						whileHover={{ scaleX: 1 }}
						transition={{ duration: 0.5 }}
						style={{ transformOrigin: "center" }}
					/>

					{/* Corner accent with animation */}
					<motion.div
						className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
						initial={{ scale: 0, rotate: -45 }}
						whileHover={{ scale: 1, rotate: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					/>

					{/* Top-right accent */}
					<motion.div
						className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						animate={{
							scale: [1, 1.5, 1],
							opacity: [0, 1, 0],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							delay: index * 0.8,
						}}
					/>
				</CardHeader>
			</Card>
		</motion.div>
	);
}
