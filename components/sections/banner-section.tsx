import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";

export default function BannerSection({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<section className="flex items-center justify-center overflow-hidden py-10 pt-32 md:pt-48 relative container">
			<GridPattern
				width={60}
				height={60}
				strokeDasharray="5"
				className={cn(
					"[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] opacity-50 lg:opacity-80"
				)}
			/>
			<div className="text-center space-y-6">{children}</div>
		</section>
	);
}
