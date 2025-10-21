import { contacts } from "@/lib/content";
import ContactCard from "./contact-card";

export default function ContactSection() {
	return (
		<section className="container">
			<div className="mt-24 grid lg:grid-cols-2 gap-16 md:gap-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
					{contacts.map((props) => (
						<ContactCard key={props.title} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
