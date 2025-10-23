import BannerSection from "@/components/sections/banner-section";
import { Fragment } from "react";

export default function Blog() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Ideas That Shape <span className="text-primary">the Future</span>
				</h1>

				<p className="text-xl text-muted-foreground leading-relaxed">
					Insights, trends, and thought leadership from the NEXUS team.
				</p>
			</BannerSection>
		</Fragment>
	);
}
