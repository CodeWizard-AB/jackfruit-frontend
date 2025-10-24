import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function DynamicImage({
	src,
	alt,
	containerClassName,
	childClassName,
}: {
	src: string;
	alt: string;
	containerClassName?: string;
	childClassName?: string;
}) {
	return (
		<figure className={cn("relative", containerClassName)}>
			<Image
				src={src}
				alt={alt}
				className={cn("object-cover", childClassName)}
				fill
			/>
		</figure>
	);
}
