import BannerSection from "@/components/sections/banner-section";
import ServiceListSection from "@/components/services/services-list-section";
import { Fragment } from "react";

export default function Services() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Precision Engineered <span className="text-primary">Solutions</span>
					<br />
					for the Digital Age
				</h1>

				<p className="text-xl text-muted-foreground leading-relaxed">
					From concept to deployment, we deliver software excellence that
					transforms businesses.
				</p>
			</BannerSection>
			<ServiceListSection />
		</Fragment>
	);
}
