import { services } from "@/lib/content";
import { Button } from "../ui/button";
import SectionHeadline from "./section-headline";
import Image from "next/image";

export default function ServiceSection() {
	return (
		<section className="container flex items-center justify-center">
			<div className="container">
				<SectionHeadline
					title="What We Do"
					description="Precision-engineered solutions for the digital age"
				/>
				<div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
					{services.slice(0, 3).map((service) => (
						<div
							key={service.title}
							className="flex flex-col text-start w-full"
						>
							<figure className="relative w-full mb-6 aspect-square">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover rounded-xl"
								/>
							</figure>
							<span className="text-2xl font-semibold tracking-tight">
								{service.title}
							</span>
							<p className="mt-2 text-muted-foreground text-[17px]">
								{service.description}
							</p>
						</div>
					))}
				</div>
				<div className="mx-auto w-max mt-16">
					<Button>View all services</Button>
				</div>
			</div>
		</section>
	);
}
