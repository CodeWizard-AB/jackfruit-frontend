import Image from "next/image";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
	return (
		<Link href="/">
			<figure className={`relative w-28 md:w-32 aspect-square ${className}`}>
				<Image
					src="https://ik.imagekit.io/xp2qigjdg/website-images/JackFruit-removebg-preview.png?updatedAt=1760791013088"
					alt="JackFruit Logo"
					fill
					className="object-cover"
				/>
			</figure>
		</Link>
	);
}
