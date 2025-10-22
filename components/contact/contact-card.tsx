import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ContactCardProps {
	icon: LucideIcon;
	title: string;
	details: string;
	description: string;
	link: string;
}

export default function ContactCard({
	icon: Icon,
	title,
	description,
	link,
	details,
}: ContactCardProps) {
	return (
		<div>
			<div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
				<Icon />
			</div>
			<h3 className="mt-6 font-semibold text-xl">{title}</h3>
			<p className="my-2.5 text-muted-foreground">{description}</p>
			<Link className="font-medium text-primary" href={link}>
				{details}
			</Link>
		</div>
	);
}
