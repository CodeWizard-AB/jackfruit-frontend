import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Logo from "../header/logo";
import { navItems } from "@/lib/content";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="pb-12 flex flex-col sm:justify-start items-center">
					{/* Logo */}
					<Logo />

					<ul className="flex items-center gap-4 flex-wrap">
						{navItems.map(({ name, link }) => (
							<li key={name}>
								<Link
									href={link}
									className="text-muted-foreground hover:text-primary"
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Separator />
				<div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
					{/* Copyright */}
					<span className="text-muted-foreground">
						&copy; {new Date().getFullYear()}{" "}
						<Link href="/" target="_blank">
							JackFruit
						</Link>
						. All rights reserved.
					</span>

					<div className="flex items-center gap-5 text-muted-foreground">
						<Link href={"/"}>
							<FaFacebook size={25} />
						</Link>
						<Link href={"/"}>
							<FaInstagram size={25} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
