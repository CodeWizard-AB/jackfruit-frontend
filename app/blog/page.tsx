import BlogsSection from "@/components/blog/blogs-section";
import BannerSection from "@/components/sections/banner-section";
import CTASection from "@/components/sections/cta-section";
import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
	title: "JACKFRUIT | Tales of Vision, Craft, and Innovation",
	description:
		"Explore the JACKFRUIT blog to uncover stories of ingenuity, innovative ideas, and the artistry behind digital transformation.",
};

export default function Blog() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Ideas That Shape <span className="text-primary">the Future</span>
				</h1>

				<p className="text-xl text-muted-foreground leading-relaxed">
					Insights, trends, and thought leadership from the JackFruit team
				</p>
			</BannerSection>
			<BlogsSection />
			<CTASection />
		</Fragment>
	);
}
