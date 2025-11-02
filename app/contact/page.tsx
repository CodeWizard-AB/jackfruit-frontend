import ContactSection from "@/components/contact/contact-seciton";
import BannerSection from "@/components/sections/banner-section";
import { BorderBeam } from "@/components/ui/border-beam";
import { Fragment } from "react";

export default function Contact() {
	return (
		<Fragment>
			<section className="container py-10 pt-30 grid grid-cols-1 lg:grid-cols-2 gap-16">
				<BannerSection>
					<h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
						Get in <span className="text-primary">Touch</span>
					</h1>

					<p className="text-xl text-muted-foreground leading-relaxed">
						Let&apos;s build something extraordinary together
					</p>

					<p className="text-xl text-muted-foreground leading-relaxed">
						At Jackfruit, we believe every great partnership begins with a
						conversation. Whether you’re exploring a new digital idea, seeking
						technical guidance, or ready to bring a product to life, we’re here
						to listen, understand, and deliver with clarity
					</p>
				</BannerSection>
				<div className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-15rem)] bg-accent rounded-xl overflow-hidden border relative">
					<BorderBeam
						size={400}
						borderWidth={2}
						className="from-transparent via-primary to-transparent"
					/>
					<video
						className="w-full h-full object-cover"
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
					>
						<source
							src="https://ik.imagekit.io/xp2qigjdg/jackfruit-videos/contact-video.mp4?updatedAt=1762104940633"
							type="video/mp4"
						/>
						<source
							src="https://ik.imagekit.io/xp2qigjdg/jackfruit-videos/contact-video.mp4?updatedAt=1762104940633"
							type="video/webm"
						/>
					</video>
				</div>
			</section>
			<ContactSection />
		</Fragment>
	);
}
