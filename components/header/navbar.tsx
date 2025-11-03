"use client";

import { Button } from "@/components/ui/button";
import Logo from "./logo";
import NavigationSheet from "./navigation-sheet";
import NavMenu from "./nav-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 left-0 right-0 z-50 transition-all duration-150",
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b"
					: "bg-transparent"
			)}
		>
			<nav className="h-24 container">
				<div className="h-full flex items-center justify-between mx-auto">
					<Logo />
					{/* Desktop Menu */}
					<NavMenu className="hidden md:block" isMobileMenu={false} />
					<div className="flex items-center gap-3">
						<Link
							href={"https://calendly.com/jackfruit-1ech/30min"}
							target="_blank"
						>
							<Button>BOOK A CALL</Button>
						</Link>
						{/* Mobile Menu */}
						<div className="md:hidden">
							<NavigationSheet />
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
