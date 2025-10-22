import ContactSection from "@/components/contact/contact-seciton";
import BannerSection from "@/components/sections/banner-section";
import { Fragment } from "react";

export default function Contact() {
	return (
		<Fragment>
			<BannerSection>
				<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
					Let&apos;s <span className="text-primary">Talk</span>
				</h1>

				<p className="text-xl text-muted-foreground leading-relaxed">
					Have a project in mind? We&apos;d love to hear about it.
				</p>
			</BannerSection>

			<ContactSection />
		</Fragment>
	);
}
