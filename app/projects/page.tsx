import ProjectListSection from "@/components/project/project-list-section";
import BannerSection from "@/components/sections/banner-section";
import CTASection from "@/components/sections/cta-section";
import { Fragment } from "react";

export default function Projects() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Our Work Speaks <span className="text-primary">for Itself</span>
				</h1>

				<p className="text-xl text-muted-foreground leading-relaxed">
					Real projects. Real results. Real impact on businesses like yours.
				</p>
			</BannerSection>
			<ProjectListSection />
			<CTASection />
		</Fragment>
	);
}
