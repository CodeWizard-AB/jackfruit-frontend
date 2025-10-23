import { cn } from "@/lib/utils";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

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
	try {
		const buffer = await fetch(src).then(async (res) =>
			Buffer.from(await res.arrayBuffer())
		);

		const { base64 } = await getPlaiceholder(buffer);

		return (
			<figure className={cn("relative", containerClassName)}>
				<Image
					src={src}
					alt={alt}
					className={cn("object-cover", childClassName)}
					blurDataURL={base64}
					fill
				/>
			</figure>
		);
	} catch (err) {
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
}
