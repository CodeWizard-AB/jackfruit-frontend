import ChooseUsSection from "@/components/home/chooseus-section";
import CTASection from "@/components/sections/cta-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import ServiceSection from "@/components/home/service-section";
import TechSection from "@/components/home/tech-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<TechSection />
			<ServiceSection />
			<ChooseUsSection />
			<FaqSection />
			<CTASection />
		</>
	);
}
