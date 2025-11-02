import PhilosophySection from "@/components/about/philosophy-section";
import StorySection from "@/components/about/story-section";
import TeamSection from "@/components/about/team-section";
import CTASection from "@/components/sections/cta-section";
import BannerSection from "@/components/sections/banner-section";
import { Fragment } from "react";

export default function About() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Driven by <span className="text-primary">Innovation</span>
					<br />
					Defined by <span className="text-primary">Excellence</span>
				</h1>
				<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
					We are a team of passionate engineers, designers, and strategists
					dedicated to building the future of software
				</p>
			</BannerSection>
			<StorySection />
			<PhilosophySection />
			<TeamSection />
			<CTASection />
		</Fragment>
	);
}
